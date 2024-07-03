import type { HlsListeners } from '../../../dist/hls.js';

export const hlsJsEvents = [
  'hlsMediaAttaching',
  'hlsMediaAttached',
  'hlsMediaDetaching',
  'hlsMediaDetached',
  'hlsMediaEnded',
  'hlsBufferReset',
  'hlsBufferCodecs',
  'hlsBufferCreated',
  'hlsBufferAppending',
  'hlsBufferAppended',
  'hlsBufferEos',
  'hlsBufferFlushing',
  'hlsBufferFlushed',
  'hlsManifestLoading',
  'hlsManifestLoaded',
  'hlsManifestParsed',
  'hlsLevelSwitching',
  'hlsLevelSwitched',
  'hlsLevelLoading',
  'hlsLevelLoaded',
  'hlsLevelUpdated',
  'hlsLevelPtsUpdated',
  'hlsLevelsUpdated',
  'hlsAudioTracksUpdated',
  'hlsAudioTrackSwitching',
  'hlsAudioTrackSwitched',
  'hlsAudioTrackLoading',
  'hlsAudioTrackLoaded',
  'hlsSubtitleTracksUpdated',
  'hlsSubtitleTracksCleared',
  'hlsSubtitleTrackSwitch',
  'hlsSubtitleTrackLoading',
  'hlsSubtitleTrackLoaded',
  'hlsSubtitleFragProcessed',
  'hlsCuesParsed',
  'hlsNonNativeTextTracksFound',
  'hlsInitPtsFound',
  'hlsFragLoading',
  'hlsFragLoadEmergencyAborted',
  'hlsFragLoaded',
  'hlsFragDecrypted',
  'hlsFragParsingInitSegment',
  'hlsFragParsingUserdata',
  'hlsFragParsingMetadata',
  'hlsFragParsed',
  'hlsFragBuffered',
  'hlsFragChanged',
  'hlsFpsDrop',
  'hlsFpsDropLevelCapping',
  'hlsMaxAutoLevelUpdated',
  'hlsError',
  'hlsDestroying',
  'hlsKeyLoading',
  'hlsKeyLoaded',
  'hlsLiveBackBufferReached',
  'hlsBackBufferReached',
  'hlsSteeringManifestLoaded',
  'hlsAssetListLoading',
  'hlsAssetListLoaded',
  'hlsInterstitialsUpdated',
  'hlsInterstitialsBufferedToBoundary',
  'hlsInterstitialAssetPlayerCreated',
  'hlsInterstitialStarted',
  'hlsInterstitialAssetStarted',
  'hlsInterstitialAssetEnded',
  'hlsInterstitialEnded',
  'hlsInterstitialsPrimaryResumed',
] as (keyof HlsListeners)[];
