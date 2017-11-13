'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundPlayerContainer = exports.withSoundCloudAudio = exports.withCustomAudio = undefined;

var _withSoundCloudAudio2 = require('./withSoundCloudAudio');

var _withSoundCloudAudio3 = _interopRequireDefault(_withSoundCloudAudio2);

var _SoundPlayerContainer2 = require('./SoundPlayerContainer');

var _SoundPlayerContainer3 = _interopRequireDefault(_SoundPlayerContainer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.withCustomAudio = _withSoundCloudAudio3.default;
exports.withSoundCloudAudio = _withSoundCloudAudio3.default;
exports.SoundPlayerContainer = _SoundPlayerContainer3.default;