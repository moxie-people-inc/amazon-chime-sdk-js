import AudioVideoControllerState from '../audiovideocontroller/AudioVideoControllerState';
import AudioVideoObserver from '../audiovideoobserver/AudioVideoObserver';
import ClientMetricReport from '../clientmetricreport/ClientMetricReport';
import ConnectionHealthData from '../connectionhealthpolicy/ConnectionHealthData';
import ConnectionHealthPolicyConfiguration from '../connectionhealthpolicy/ConnectionHealthPolicyConfiguration';
import RemovableObserver from '../removableobserver/RemovableObserver';
import SignalingClientEvent from '../signalingclient/SignalingClientEvent';
import SignalingClientObserver from '../signalingclientobserver/SignalingClientObserver';
import VideoTileState from '../videotile/VideoTileState';
import BaseTask from './BaseTask';
export default class MonitorTask extends BaseTask implements AudioVideoObserver, RemovableObserver, SignalingClientObserver {
    private context;
    private initialConnectionHealthData;
    protected taskName: string;
    private reconnectionHealthPolicy;
    private unusableAudioWarningHealthPolicy;
    private prevSignalStrength;
    private static DEFAULT_TIMEOUT_FOR_START_SENDING_VIDEO_MS;
    private static DEFAULT_DOWNLINK_CALLRATE_OVERSHOOT_FACTOR;
    private static DEFAULT_DOWNLINK_CALLRATE_UNDERSHOOT_FACTOR;
    private currentVideoDownlinkBandwidthEstimationKbps;
    private currentAvailableStreamAvgBitrates;
    private hasSignalingError;
    private presenceHandlerCalled;
    constructor(context: AudioVideoControllerState, connectionHealthPolicyConfiguration: ConnectionHealthPolicyConfiguration, initialConnectionHealthData: ConnectionHealthData);
    removeObserver(): void;
    run(): Promise<void>;
    videoTileDidUpdate(_tileState: VideoTileState): void;
    videoSendHealthDidChange(bitrateKbps: number, packetsPerSecond: number): void;
    videoReceiveBandwidthDidChange(newBandwidthKbps: number, oldBandwidthKbps: number): void;
    private checkResubscribe;
    metricsDidReceive(clientMetricReport: ClientMetricReport): void;
    connectionHealthDidChange(connectionHealthData: ConnectionHealthData): void;
    private handleBitrateFrame;
    handleSignalingClientEvent(event: SignalingClientEvent): void;
    private checkAndSendWeakSignalEvent;
    private realtimeFatalErrorCallback;
    private realtimeAttendeeIdPresenceHandler;
    private generateAudioVideoEventAttributes;
}
