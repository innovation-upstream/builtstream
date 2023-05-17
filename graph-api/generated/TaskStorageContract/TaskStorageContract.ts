// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TaskArchived extends ethereum.Event {
  get params(): TaskArchived__Params {
    return new TaskArchived__Params(this);
  }
}

export class TaskArchived__Params {
  _event: TaskArchived;

  constructor(event: TaskArchived) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TaskAssignment extends ethereum.Event {
  get params(): TaskAssignment__Params {
    return new TaskAssignment__Params(this);
  }
}

export class TaskAssignment__Params {
  _event: TaskAssignment;

  constructor(event: TaskAssignment) {
    this._event = event;
  }

  get assignee(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get taskId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get staked(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class TaskAssignmentRequested extends ethereum.Event {
  get params(): TaskAssignmentRequested__Params {
    return new TaskAssignmentRequested__Params(this);
  }
}

export class TaskAssignmentRequested__Params {
  _event: TaskAssignmentRequested;

  constructor(event: TaskAssignmentRequested) {
    this._event = event;
  }

  get assignee(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get taskId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TaskClosed extends ethereum.Event {
  get params(): TaskClosed__Params {
    return new TaskClosed__Params(this);
  }
}

export class TaskClosed__Params {
  _event: TaskClosed;

  constructor(event: TaskClosed) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TaskConfirmation extends ethereum.Event {
  get params(): TaskConfirmation__Params {
    return new TaskConfirmation__Params(this);
  }
}

export class TaskConfirmation__Params {
  _event: TaskConfirmation;

  constructor(event: TaskConfirmation) {
    this._event = event;
  }

  get approver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get taskId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TaskCreation extends ethereum.Event {
  get params(): TaskCreation__Params {
    return new TaskCreation__Params(this);
  }
}

export class TaskCreation__Params {
  _event: TaskCreation;

  constructor(event: TaskCreation) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get task(): TaskCreationTaskStruct {
    return changetype<TaskCreationTaskStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }

  get taskMetadata(): TaskCreationTaskMetadataStruct {
    return changetype<TaskCreationTaskMetadataStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class TaskCreationTaskStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get externalId(): string {
    return this[1].toString();
  }

  get orgId(): BigInt {
    return this[2].toBigInt();
  }

  get title(): string {
    return this[3].toString();
  }

  get description(): string {
    return this[4].toString();
  }

  get assigner(): Address {
    return this[5].toAddress();
  }

  get assigneeAddress(): Address {
    return this[6].toAddress();
  }

  get taskTags(): Array<BigInt> {
    return this[7].toBigIntArray();
  }

  get complexityScore(): BigInt {
    return this[8].toBigInt();
  }

  get reputationLevel(): BigInt {
    return this[9].toBigInt();
  }

  get status(): i32 {
    return this[10].toI32();
  }

  get comment(): string {
    return this[11].toString();
  }

  get taskDuration(): BigInt {
    return this[12].toBigInt();
  }
}

export class TaskCreationTaskMetadataStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get requiredApprovals(): BigInt {
    return this[1].toBigInt();
  }

  get rewardAmount(): BigInt {
    return this[2].toBigInt();
  }

  get rewardToken(): Address {
    return this[3].toAddress();
  }

  get assignDate(): BigInt {
    return this[4].toBigInt();
  }

  get submitDate(): BigInt {
    return this[5].toBigInt();
  }

  get staked(): boolean {
    return this[6].toBoolean();
  }

  get revisions(): Array<TaskCreationTaskMetadataRevisionsStruct> {
    return this[7].toTupleArray<TaskCreationTaskMetadataRevisionsStruct>();
  }

  get revisionCount(): BigInt {
    return this[8].toBigInt();
  }

  get assignmentRequests(): Array<Address> {
    return this[9].toAddressArray();
  }

  get approvers(): Array<Address> {
    return this[10].toAddressArray();
  }

  get totalWaitTime(): BigInt {
    return this[11].toBigInt();
  }

  get disableSelfAssign(): boolean {
    return this[12].toBoolean();
  }
}

export class TaskCreationTaskMetadataRevisionsStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get requester(): Address {
    return this[1].toAddress();
  }

  get revisionId(): Bytes {
    return this[2].toBytes();
  }

  get revisionHash(): Bytes {
    return this[3].toBytes();
  }

  get durationExtension(): BigInt {
    return this[4].toBigInt();
  }

  get durationExtensionRequest(): BigInt {
    return this[5].toBigInt();
  }

  get status(): i32 {
    return this[6].toI32();
  }
}

export class TaskOpened extends ethereum.Event {
  get params(): TaskOpened__Params {
    return new TaskOpened__Params(this);
  }
}

export class TaskOpened__Params {
  _event: TaskOpened;

  constructor(event: TaskOpened) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rewardAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get rewardToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get disableSelfAssign(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class TaskRejected extends ethereum.Event {
  get params(): TaskRejected__Params {
    return new TaskRejected__Params(this);
  }
}

export class TaskRejected__Params {
  _event: TaskRejected;

  constructor(event: TaskRejected) {
    this._event = event;
  }

  get approver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get taskId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TaskRevisionAccepted extends ethereum.Event {
  get params(): TaskRevisionAccepted__Params {
    return new TaskRevisionAccepted__Params(this);
  }
}

export class TaskRevisionAccepted__Params {
  _event: TaskRevisionAccepted;

  constructor(event: TaskRevisionAccepted) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get revisionId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get taskDuration(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get totalWaitTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class TaskRevisionChangesRequested extends ethereum.Event {
  get params(): TaskRevisionChangesRequested__Params {
    return new TaskRevisionChangesRequested__Params(this);
  }
}

export class TaskRevisionChangesRequested__Params {
  _event: TaskRevisionChangesRequested;

  constructor(event: TaskRevisionChangesRequested) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get revisionId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get durationExtension(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TaskRevisionRejected extends ethereum.Event {
  get params(): TaskRevisionRejected__Params {
    return new TaskRevisionRejected__Params(this);
  }
}

export class TaskRevisionRejected__Params {
  _event: TaskRevisionRejected;

  constructor(event: TaskRevisionRejected) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get revisionId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class TaskRevisionRequested extends ethereum.Event {
  get params(): TaskRevisionRequested__Params {
    return new TaskRevisionRequested__Params(this);
  }
}

export class TaskRevisionRequested__Params {
  _event: TaskRevisionRequested;

  constructor(event: TaskRevisionRequested) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get revision(): TaskRevisionRequestedRevisionStruct {
    return changetype<TaskRevisionRequestedRevisionStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class TaskRevisionRequestedRevisionStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get requester(): Address {
    return this[1].toAddress();
  }

  get revisionId(): Bytes {
    return this[2].toBytes();
  }

  get revisionHash(): Bytes {
    return this[3].toBytes();
  }

  get durationExtension(): BigInt {
    return this[4].toBigInt();
  }

  get durationExtensionRequest(): BigInt {
    return this[5].toBigInt();
  }

  get status(): i32 {
    return this[6].toI32();
  }
}

export class TaskRevocation extends ethereum.Event {
  get params(): TaskRevocation__Params {
    return new TaskRevocation__Params(this);
  }
}

export class TaskRevocation__Params {
  _event: TaskRevocation;

  constructor(event: TaskRevocation) {
    this._event = event;
  }

  get approver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get taskId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TaskSubmission extends ethereum.Event {
  get params(): TaskSubmission__Params {
    return new TaskSubmission__Params(this);
  }
}

export class TaskSubmission__Params {
  _event: TaskSubmission;

  constructor(event: TaskSubmission) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get comment(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class TaskUnassignment extends ethereum.Event {
  get params(): TaskUnassignment__Params {
    return new TaskUnassignment__Params(this);
  }
}

export class TaskUnassignment__Params {
  _event: TaskUnassignment;

  constructor(event: TaskUnassignment) {
    this._event = event;
  }

  get assignee(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get taskId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TaskUpdated extends ethereum.Event {
  get params(): TaskUpdated__Params {
    return new TaskUpdated__Params(this);
  }
}

export class TaskUpdated__Params {
  _event: TaskUpdated;

  constructor(event: TaskUpdated) {
    this._event = event;
  }

  get taskId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get task(): TaskUpdatedTaskStruct {
    return changetype<TaskUpdatedTaskStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }

  get taskMetadata(): TaskUpdatedTaskMetadataStruct {
    return changetype<TaskUpdatedTaskMetadataStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class TaskUpdatedTaskStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get externalId(): string {
    return this[1].toString();
  }

  get orgId(): BigInt {
    return this[2].toBigInt();
  }

  get title(): string {
    return this[3].toString();
  }

  get description(): string {
    return this[4].toString();
  }

  get assigner(): Address {
    return this[5].toAddress();
  }

  get assigneeAddress(): Address {
    return this[6].toAddress();
  }

  get taskTags(): Array<BigInt> {
    return this[7].toBigIntArray();
  }

  get complexityScore(): BigInt {
    return this[8].toBigInt();
  }

  get reputationLevel(): BigInt {
    return this[9].toBigInt();
  }

  get status(): i32 {
    return this[10].toI32();
  }

  get comment(): string {
    return this[11].toString();
  }

  get taskDuration(): BigInt {
    return this[12].toBigInt();
  }
}

export class TaskUpdatedTaskMetadataStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get requiredApprovals(): BigInt {
    return this[1].toBigInt();
  }

  get rewardAmount(): BigInt {
    return this[2].toBigInt();
  }

  get rewardToken(): Address {
    return this[3].toAddress();
  }

  get assignDate(): BigInt {
    return this[4].toBigInt();
  }

  get submitDate(): BigInt {
    return this[5].toBigInt();
  }

  get staked(): boolean {
    return this[6].toBoolean();
  }

  get revisions(): Array<TaskUpdatedTaskMetadataRevisionsStruct> {
    return this[7].toTupleArray<TaskUpdatedTaskMetadataRevisionsStruct>();
  }

  get revisionCount(): BigInt {
    return this[8].toBigInt();
  }

  get assignmentRequests(): Array<Address> {
    return this[9].toAddressArray();
  }

  get approvers(): Array<Address> {
    return this[10].toAddressArray();
  }

  get totalWaitTime(): BigInt {
    return this[11].toBigInt();
  }

  get disableSelfAssign(): boolean {
    return this[12].toBoolean();
  }
}

export class TaskUpdatedTaskMetadataRevisionsStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get requester(): Address {
    return this[1].toAddress();
  }

  get revisionId(): Bytes {
    return this[2].toBytes();
  }

  get revisionHash(): Bytes {
    return this[3].toBytes();
  }

  get durationExtension(): BigInt {
    return this[4].toBigInt();
  }

  get durationExtensionRequest(): BigInt {
    return this[5].toBigInt();
  }

  get status(): i32 {
    return this[6].toI32();
  }
}

export class TaskStorageContract__getTaskResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get externalId(): string {
    return this[1].toString();
  }

  get orgId(): BigInt {
    return this[2].toBigInt();
  }

  get title(): string {
    return this[3].toString();
  }

  get description(): string {
    return this[4].toString();
  }

  get assigner(): Address {
    return this[5].toAddress();
  }

  get assigneeAddress(): Address {
    return this[6].toAddress();
  }

  get taskTags(): Array<BigInt> {
    return this[7].toBigIntArray();
  }

  get complexityScore(): BigInt {
    return this[8].toBigInt();
  }

  get reputationLevel(): BigInt {
    return this[9].toBigInt();
  }

  get status(): i32 {
    return this[10].toI32();
  }

  get comment(): string {
    return this[11].toString();
  }

  get taskDuration(): BigInt {
    return this[12].toBigInt();
  }
}

export class TaskStorageContract__getTaskMetadataResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get requiredApprovals(): BigInt {
    return this[1].toBigInt();
  }

  get rewardAmount(): BigInt {
    return this[2].toBigInt();
  }

  get rewardToken(): Address {
    return this[3].toAddress();
  }

  get assignDate(): BigInt {
    return this[4].toBigInt();
  }

  get submitDate(): BigInt {
    return this[5].toBigInt();
  }

  get staked(): boolean {
    return this[6].toBoolean();
  }

  get revisions(): Array<
    TaskStorageContract__getTaskMetadataResultValue0RevisionsStruct
  > {
    return this[7].toTupleArray<
      TaskStorageContract__getTaskMetadataResultValue0RevisionsStruct
    >();
  }

  get revisionCount(): BigInt {
    return this[8].toBigInt();
  }

  get assignmentRequests(): Array<Address> {
    return this[9].toAddressArray();
  }

  get approvers(): Array<Address> {
    return this[10].toAddressArray();
  }

  get totalWaitTime(): BigInt {
    return this[11].toBigInt();
  }

  get disableSelfAssign(): boolean {
    return this[12].toBoolean();
  }
}

export class TaskStorageContract__getTaskMetadataResultValue0RevisionsStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get requester(): Address {
    return this[1].toAddress();
  }

  get revisionId(): Bytes {
    return this[2].toBytes();
  }

  get revisionHash(): Bytes {
    return this[3].toBytes();
  }

  get durationExtension(): BigInt {
    return this[4].toBigInt();
  }

  get durationExtensionRequest(): BigInt {
    return this[5].toBigInt();
  }

  get status(): i32 {
    return this[6].toI32();
  }
}

export class TaskStorageContract extends ethereum.SmartContract {
  static bind(address: Address): TaskStorageContract {
    return new TaskStorageContract("TaskStorageContract", address);
  }

  createTask(
    orgId: BigInt,
    externalId: string,
    title: string,
    description: string,
    taskTags: Array<BigInt>,
    complexityScore: BigInt,
    reputationLevel: BigInt,
    requiredApprovals: BigInt,
    taskDuration: BigInt,
    disableSelfAssign: boolean
  ): BigInt {
    let result = super.call(
      "createTask",
      "createTask(uint256,string,string,string,uint256[],uint256,uint256,uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromString(externalId),
        ethereum.Value.fromString(title),
        ethereum.Value.fromString(description),
        ethereum.Value.fromUnsignedBigIntArray(taskTags),
        ethereum.Value.fromUnsignedBigInt(complexityScore),
        ethereum.Value.fromUnsignedBigInt(reputationLevel),
        ethereum.Value.fromUnsignedBigInt(requiredApprovals),
        ethereum.Value.fromUnsignedBigInt(taskDuration),
        ethereum.Value.fromBoolean(disableSelfAssign)
      ]
    );

    return result[0].toBigInt();
  }

  try_createTask(
    orgId: BigInt,
    externalId: string,
    title: string,
    description: string,
    taskTags: Array<BigInt>,
    complexityScore: BigInt,
    reputationLevel: BigInt,
    requiredApprovals: BigInt,
    taskDuration: BigInt,
    disableSelfAssign: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createTask",
      "createTask(uint256,string,string,string,uint256[],uint256,uint256,uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromString(externalId),
        ethereum.Value.fromString(title),
        ethereum.Value.fromString(description),
        ethereum.Value.fromUnsignedBigIntArray(taskTags),
        ethereum.Value.fromUnsignedBigInt(complexityScore),
        ethereum.Value.fromUnsignedBigInt(reputationLevel),
        ethereum.Value.fromUnsignedBigInt(requiredApprovals),
        ethereum.Value.fromUnsignedBigInt(taskDuration),
        ethereum.Value.fromBoolean(disableSelfAssign)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  didApprove(taskId: BigInt, approver: Address): boolean {
    let result = super.call(
      "didApprove",
      "didApprove(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(taskId),
        ethereum.Value.fromAddress(approver)
      ]
    );

    return result[0].toBoolean();
  }

  try_didApprove(
    taskId: BigInt,
    approver: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "didApprove",
      "didApprove(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(taskId),
        ethereum.Value.fromAddress(approver)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getTask(taskId: BigInt): TaskStorageContract__getTaskResultValue0Struct {
    let result = super.call(
      "getTask",
      "getTask(uint256):((uint256,string,uint256,string,string,address,address,uint256[],uint256,uint256,uint8,string,uint256))",
      [ethereum.Value.fromUnsignedBigInt(taskId)]
    );

    return changetype<TaskStorageContract__getTaskResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getTask(
    taskId: BigInt
  ): ethereum.CallResult<TaskStorageContract__getTaskResultValue0Struct> {
    let result = super.tryCall(
      "getTask",
      "getTask(uint256):((uint256,string,uint256,string,string,address,address,uint256[],uint256,uint256,uint8,string,uint256))",
      [ethereum.Value.fromUnsignedBigInt(taskId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TaskStorageContract__getTaskResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getTaskMetadata(
    taskId: BigInt
  ): TaskStorageContract__getTaskMetadataResultValue0Struct {
    let result = super.call(
      "getTaskMetadata",
      "getTaskMetadata(uint256):((uint256,uint256,uint256,address,uint256,uint256,bool,(uint256,address,bytes32,bytes32,uint256,uint256,uint8)[],uint256,address[],address[],uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(taskId)]
    );

    return changetype<TaskStorageContract__getTaskMetadataResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getTaskMetadata(
    taskId: BigInt
  ): ethereum.CallResult<
    TaskStorageContract__getTaskMetadataResultValue0Struct
  > {
    let result = super.tryCall(
      "getTaskMetadata",
      "getTaskMetadata(uint256):((uint256,uint256,uint256,address,uint256,uint256,bool,(uint256,address,bytes32,bytes32,uint256,uint256,uint8)[],uint256,address[],address[],uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(taskId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TaskStorageContract__getTaskMetadataResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptTaskRevisionCall extends ethereum.Call {
  get inputs(): AcceptTaskRevisionCall__Inputs {
    return new AcceptTaskRevisionCall__Inputs(this);
  }

  get outputs(): AcceptTaskRevisionCall__Outputs {
    return new AcceptTaskRevisionCall__Outputs(this);
  }
}

export class AcceptTaskRevisionCall__Inputs {
  _call: AcceptTaskRevisionCall;

  constructor(call: AcceptTaskRevisionCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get revisionIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AcceptTaskRevisionCall__Outputs {
  _call: AcceptTaskRevisionCall;

  constructor(call: AcceptTaskRevisionCall) {
    this._call = call;
  }
}

export class ApproveTaskCall extends ethereum.Call {
  get inputs(): ApproveTaskCall__Inputs {
    return new ApproveTaskCall__Inputs(this);
  }

  get outputs(): ApproveTaskCall__Outputs {
    return new ApproveTaskCall__Outputs(this);
  }
}

export class ApproveTaskCall__Inputs {
  _call: ApproveTaskCall;

  constructor(call: ApproveTaskCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get approver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ApproveTaskCall__Outputs {
  _call: ApproveTaskCall;

  constructor(call: ApproveTaskCall) {
    this._call = call;
  }
}

export class ArchiveCall extends ethereum.Call {
  get inputs(): ArchiveCall__Inputs {
    return new ArchiveCall__Inputs(this);
  }

  get outputs(): ArchiveCall__Outputs {
    return new ArchiveCall__Outputs(this);
  }
}

export class ArchiveCall__Inputs {
  _call: ArchiveCall;

  constructor(call: ArchiveCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ArchiveCall__Outputs {
  _call: ArchiveCall;

  constructor(call: ArchiveCall) {
    this._call = call;
  }
}

export class AssignCall extends ethereum.Call {
  get inputs(): AssignCall__Inputs {
    return new AssignCall__Inputs(this);
  }

  get outputs(): AssignCall__Outputs {
    return new AssignCall__Outputs(this);
  }
}

export class AssignCall__Inputs {
  _call: AssignCall;

  constructor(call: AssignCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get assignee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get assigner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get staked(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class AssignCall__Outputs {
  _call: AssignCall;

  constructor(call: AssignCall) {
    this._call = call;
  }
}

export class CloseTaskCall extends ethereum.Call {
  get inputs(): CloseTaskCall__Inputs {
    return new CloseTaskCall__Inputs(this);
  }

  get outputs(): CloseTaskCall__Outputs {
    return new CloseTaskCall__Outputs(this);
  }
}

export class CloseTaskCall__Inputs {
  _call: CloseTaskCall;

  constructor(call: CloseTaskCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CloseTaskCall__Outputs {
  _call: CloseTaskCall;

  constructor(call: CloseTaskCall) {
    this._call = call;
  }
}

export class CreateTaskCall extends ethereum.Call {
  get inputs(): CreateTaskCall__Inputs {
    return new CreateTaskCall__Inputs(this);
  }

  get outputs(): CreateTaskCall__Outputs {
    return new CreateTaskCall__Outputs(this);
  }
}

export class CreateTaskCall__Inputs {
  _call: CreateTaskCall;

  constructor(call: CreateTaskCall) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get externalId(): string {
    return this._call.inputValues[1].value.toString();
  }

  get title(): string {
    return this._call.inputValues[2].value.toString();
  }

  get description(): string {
    return this._call.inputValues[3].value.toString();
  }

  get taskTags(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get complexityScore(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get reputationLevel(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get requiredApprovals(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get taskDuration(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get disableSelfAssign(): boolean {
    return this._call.inputValues[9].value.toBoolean();
  }
}

export class CreateTaskCall__Outputs {
  _call: CreateTaskCall;

  constructor(call: CreateTaskCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MakeAssignmentRequestCall extends ethereum.Call {
  get inputs(): MakeAssignmentRequestCall__Inputs {
    return new MakeAssignmentRequestCall__Inputs(this);
  }

  get outputs(): MakeAssignmentRequestCall__Outputs {
    return new MakeAssignmentRequestCall__Outputs(this);
  }
}

export class MakeAssignmentRequestCall__Inputs {
  _call: MakeAssignmentRequestCall;

  constructor(call: MakeAssignmentRequestCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get assignee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class MakeAssignmentRequestCall__Outputs {
  _call: MakeAssignmentRequestCall;

  constructor(call: MakeAssignmentRequestCall) {
    this._call = call;
  }
}

export class OpenTaskCall extends ethereum.Call {
  get inputs(): OpenTaskCall__Inputs {
    return new OpenTaskCall__Inputs(this);
  }

  get outputs(): OpenTaskCall__Outputs {
    return new OpenTaskCall__Outputs(this);
  }
}

export class OpenTaskCall__Inputs {
  _call: OpenTaskCall;

  constructor(call: OpenTaskCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get rewardAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get rewardToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get disableSelfAssign(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class OpenTaskCall__Outputs {
  _call: OpenTaskCall;

  constructor(call: OpenTaskCall) {
    this._call = call;
  }
}

export class RejectTaskRevisionCall extends ethereum.Call {
  get inputs(): RejectTaskRevisionCall__Inputs {
    return new RejectTaskRevisionCall__Inputs(this);
  }

  get outputs(): RejectTaskRevisionCall__Outputs {
    return new RejectTaskRevisionCall__Outputs(this);
  }
}

export class RejectTaskRevisionCall__Inputs {
  _call: RejectTaskRevisionCall;

  constructor(call: RejectTaskRevisionCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get revisionIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RejectTaskRevisionCall__Outputs {
  _call: RejectTaskRevisionCall;

  constructor(call: RejectTaskRevisionCall) {
    this._call = call;
  }
}

export class RequestForTaskRevisionCall extends ethereum.Call {
  get inputs(): RequestForTaskRevisionCall__Inputs {
    return new RequestForTaskRevisionCall__Inputs(this);
  }

  get outputs(): RequestForTaskRevisionCall__Outputs {
    return new RequestForTaskRevisionCall__Outputs(this);
  }
}

export class RequestForTaskRevisionCall__Inputs {
  _call: RequestForTaskRevisionCall;

  constructor(call: RequestForTaskRevisionCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get revisionId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get revisionHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get durationExtension(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get approver(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class RequestForTaskRevisionCall__Outputs {
  _call: RequestForTaskRevisionCall;

  constructor(call: RequestForTaskRevisionCall) {
    this._call = call;
  }
}

export class RequestForTaskRevisionDurationExtensionCall extends ethereum.Call {
  get inputs(): RequestForTaskRevisionDurationExtensionCall__Inputs {
    return new RequestForTaskRevisionDurationExtensionCall__Inputs(this);
  }

  get outputs(): RequestForTaskRevisionDurationExtensionCall__Outputs {
    return new RequestForTaskRevisionDurationExtensionCall__Outputs(this);
  }
}

export class RequestForTaskRevisionDurationExtensionCall__Inputs {
  _call: RequestForTaskRevisionDurationExtensionCall;

  constructor(call: RequestForTaskRevisionDurationExtensionCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get revisionIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get durationExtension(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RequestForTaskRevisionDurationExtensionCall__Outputs {
  _call: RequestForTaskRevisionDurationExtensionCall;

  constructor(call: RequestForTaskRevisionDurationExtensionCall) {
    this._call = call;
  }
}

export class RevokeApprovalCall extends ethereum.Call {
  get inputs(): RevokeApprovalCall__Inputs {
    return new RevokeApprovalCall__Inputs(this);
  }

  get outputs(): RevokeApprovalCall__Outputs {
    return new RevokeApprovalCall__Outputs(this);
  }
}

export class RevokeApprovalCall__Inputs {
  _call: RevokeApprovalCall;

  constructor(call: RevokeApprovalCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get approver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeApprovalCall__Outputs {
  _call: RevokeApprovalCall;

  constructor(call: RevokeApprovalCall) {
    this._call = call;
  }
}

export class SubmitTaskCall extends ethereum.Call {
  get inputs(): SubmitTaskCall__Inputs {
    return new SubmitTaskCall__Inputs(this);
  }

  get outputs(): SubmitTaskCall__Outputs {
    return new SubmitTaskCall__Outputs(this);
  }
}

export class SubmitTaskCall__Inputs {
  _call: SubmitTaskCall;

  constructor(call: SubmitTaskCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get assignee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get comment(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class SubmitTaskCall__Outputs {
  _call: SubmitTaskCall;

  constructor(call: SubmitTaskCall) {
    this._call = call;
  }
}

export class UnassignCall extends ethereum.Call {
  get inputs(): UnassignCall__Inputs {
    return new UnassignCall__Inputs(this);
  }

  get outputs(): UnassignCall__Outputs {
    return new UnassignCall__Outputs(this);
  }
}

export class UnassignCall__Inputs {
  _call: UnassignCall;

  constructor(call: UnassignCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get assignee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UnassignCall__Outputs {
  _call: UnassignCall;

  constructor(call: UnassignCall) {
    this._call = call;
  }
}

export class UpdateTaskCall extends ethereum.Call {
  get inputs(): UpdateTaskCall__Inputs {
    return new UpdateTaskCall__Inputs(this);
  }

  get outputs(): UpdateTaskCall__Outputs {
    return new UpdateTaskCall__Outputs(this);
  }
}

export class UpdateTaskCall__Inputs {
  _call: UpdateTaskCall;

  constructor(call: UpdateTaskCall) {
    this._call = call;
  }

  get taskId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get externalId(): string {
    return this._call.inputValues[1].value.toString();
  }

  get title(): string {
    return this._call.inputValues[2].value.toString();
  }

  get description(): string {
    return this._call.inputValues[3].value.toString();
  }

  get taskTags(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get complexityScore(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get reputationLevel(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get taskDuration(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get disableSelfAssign(): boolean {
    return this._call.inputValues[8].value.toBoolean();
  }
}

export class UpdateTaskCall__Outputs {
  _call: UpdateTaskCall;

  constructor(call: UpdateTaskCall) {
    this._call = call;
  }
}

export class UpdateTaskContractAddressCall extends ethereum.Call {
  get inputs(): UpdateTaskContractAddressCall__Inputs {
    return new UpdateTaskContractAddressCall__Inputs(this);
  }

  get outputs(): UpdateTaskContractAddressCall__Outputs {
    return new UpdateTaskContractAddressCall__Outputs(this);
  }
}

export class UpdateTaskContractAddressCall__Inputs {
  _call: UpdateTaskContractAddressCall;

  constructor(call: UpdateTaskContractAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateTaskContractAddressCall__Outputs {
  _call: UpdateTaskContractAddressCall;

  constructor(call: UpdateTaskContractAddressCall) {
    this._call = call;
  }
}
