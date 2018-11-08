const INVALID_MESSAGE = 'INVALID_MESSAGE';
const CONNECTION_ESTABLISHED = 'CONNECTION_ESTABLISHED';
const REQUEST_TO_CONNECT = 'REQUEST_TO_CONNECT';
const PLAYER_SLOT_IS_FULL = 'PLAYER_SLOT_IS_FULL';
const GAME_IS_FULL = 'GAME_IS_FULL';
const ADDED_TO_GAME = 'ADDED_TO_GAME';
const MAKE_MOVE = 'MAKE_MOVE';
const INVALID_MOVE = 'INVALID_MOVE';
const SUCCESSFUL_MOVE = 'SUCCESSFUL_MOVE';
const GAME_STATUS = 'GAME_STATUS';
const GAME_RESET = 'GAME_RESET';
const RESET_GAME = 'RESET_GAME';
const SPECTATOR_JOIN = 'SPECTATOR_JOIN';

export const incomingMessageTypes = {
  MAKE_MOVE,
  REQUEST_TO_CONNECT,
  RESET_GAME,
  SPECTATOR_JOIN,
};

export const outgoingMessageTypes = {
  CONNECTION_ESTABLISHED,
  INVALID_MESSAGE,
  PLAYER_SLOT_IS_FULL,
  GAME_IS_FULL,
  ADDED_TO_GAME,
  INVALID_MOVE,
  SUCCESSFUL_MOVE,
  GAME_STATUS,
  GAME_RESET,
};