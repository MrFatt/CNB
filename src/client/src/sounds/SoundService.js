import { Howl } from 'howler';
import drawSound from './draw.mp3';
import pointsSound from './points.mp3';

export const SOUND_KEYS = {
  WAITING_MUSIC: 'WAITING_MUSIC',
  POINTS_INCREASE: 'POINTS_INCREASE',
  COUNTDOWN_BLIP: 'COUNTDOWN_BLIP',
  PLAYER_MOVED_SELECTED: 'PLAYER_MOVED_SELECTED',
  DRAW: 'DRAW',
};

export class SoundService {
  _theme = null;
  _sounds = {};
  _resumableSoundKeys = []; //Sounds that can be played when music is toggled back on
  _musicEnabled = false;

  constructor(theme, musicEnabled = false) {
    if (!theme) {
      throw new Error('Sound Service requires a theme');
    }
    this._theme = theme;
    this._musicEnabled = musicEnabled;

    //Pre-load sounds
    this._sounds[SOUND_KEYS.WAITING_MUSIC] = {
      resumeable: true,
      sound: new Howl({
        src: [theme.sounds.waitingMusic],
        loop: true,
        volume: 0.6,
      }),
    };

    this._sounds[SOUND_KEYS.POINTS_INCREASE] = {
      sound: new Howl({ src: [pointsSound] }),
    };

    this._sounds[SOUND_KEYS.COUNTDOWN_BLIP] = {
      sound: new Howl({ src: [theme.sounds.countdownBeep] }),
    };

    this._sounds[SOUND_KEYS.PLAYER_MOVED_SELECTED] = {
      sound: new Howl({ src: [theme.sounds.playerMoveSelected] }),
    };

    this._sounds[SOUND_KEYS.DRAW] = {
      sound: new Howl({ src: [drawSound] }),
    };

    //Pre-load winning sounds
    Object.keys(this._theme.characters.winningSoundMapping).forEach(key => {
      console.log('Adding sound for key', key);
      this._sounds[key] = {
        sound: new Howl({
          src: [this._theme.characters.winningSoundMapping[key]],
        }),
        resumeable: true,
      };
    });

    console.log('SOUNDS', this._sounds);
  }

  setMusicEnabled(enabled) {
    this._musicEnabled = enabled;

    if (enabled) {
      this._resumableSoundKeys.forEach(soundKey => {
        this._sounds[soundKey].sound.play();
      });
    }

    if (!enabled) {
      Object.keys(this._sounds).forEach(soundKey => {
        this._sounds[soundKey].sound.stop();
      });
    }
  }

  play(soundKey, forceIfStillPlaying = false) {
    //Place sound in resumable sounds in case music gets turned on
    if (
      this._sounds[soundKey].resumeable &&
      !this._resumableSoundKeys.includes(soundKey)
    ) {
      this._resumableSoundKeys = [...this._resumableSoundKeys, soundKey];
    }

    if (!this._musicEnabled) {
      return;
    }

    if (!forceIfStillPlaying && this._sounds[soundKey].sound.playing()) {
      return;
    }

    this._sounds[soundKey].sound.play();
  }

  stop(soundKey) {
    this._resumableSoundKeys = this._resumableSoundKeys.filter(
      key => key !== soundKey
    );
    this._sounds[soundKey].sound.stop();
  }

  stopAll() {
    Object.keys(this._sounds).forEach(key => {
      this._sounds[key].sound.stop();
    })
  }

  playWinningSound(winningMove, isDraw) {
    const soundKey = isDraw ? SOUND_KEYS.DRAW : winningMove;
    this.play(soundKey);
  }
}
