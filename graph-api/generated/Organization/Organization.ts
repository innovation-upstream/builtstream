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

export class OrganizationApproverAddition extends ethereum.Event {
  get params(): OrganizationApproverAddition__Params {
    return new OrganizationApproverAddition__Params(this);
  }
}

export class OrganizationApproverAddition__Params {
  _event: OrganizationApproverAddition;

  constructor(event: OrganizationApproverAddition) {
    this._event = event;
  }

  get _orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _approver(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OrganizationApproverRemoval extends ethereum.Event {
  get params(): OrganizationApproverRemoval__Params {
    return new OrganizationApproverRemoval__Params(this);
  }
}

export class OrganizationApproverRemoval__Params {
  _event: OrganizationApproverRemoval;

  constructor(event: OrganizationApproverRemoval) {
    this._event = event;
  }

  get _orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _approver(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OrganizationCreation extends ethereum.Event {
  get params(): OrganizationCreation__Params {
    return new OrganizationCreation__Params(this);
  }
}

export class OrganizationCreation__Params {
  _event: OrganizationCreation;

  constructor(event: OrganizationCreation) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get org(): OrganizationCreationOrgStruct {
    return changetype<OrganizationCreationOrgStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class OrganizationCreationOrgStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get approvers(): Array<Address> {
    return this[3].toAddressArray();
  }

  get signers(): Array<Address> {
    return this[4].toAddressArray();
  }

  get isInitialized(): boolean {
    return this[5].toBoolean();
  }

  get isArchived(): boolean {
    return this[6].toBoolean();
  }
}

export class OrganizationInitialized extends ethereum.Event {
  get params(): OrganizationInitialized__Params {
    return new OrganizationInitialized__Params(this);
  }
}

export class OrganizationInitialized__Params {
  _event: OrganizationInitialized;

  constructor(event: OrganizationInitialized) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get config(): OrganizationInitializedConfigStruct {
    return changetype<OrganizationInitializedConfigStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class OrganizationInitializedConfigStruct extends ethereum.Tuple {
  get orgId(): BigInt {
    return this[0].toBigInt();
  }

  get requiredTaskApprovals(): BigInt {
    return this[1].toBigInt();
  }

  get requiredConfirmations(): BigInt {
    return this[2].toBigInt();
  }

  get rewardMultiplier(): BigInt {
    return this[3].toBigInt();
  }

  get rewardToken(): Address {
    return this[4].toAddress();
  }

  get rewardSlashMultiplier(): BigInt {
    return this[5].toBigInt();
  }

  get slashRewardEvery(): BigInt {
    return this[6].toBigInt();
  }
}

export class OrganizationSignerAddition extends ethereum.Event {
  get params(): OrganizationSignerAddition__Params {
    return new OrganizationSignerAddition__Params(this);
  }
}

export class OrganizationSignerAddition__Params {
  _event: OrganizationSignerAddition;

  constructor(event: OrganizationSignerAddition) {
    this._event = event;
  }

  get _orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _signer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OrganizationSignerRemoval extends ethereum.Event {
  get params(): OrganizationSignerRemoval__Params {
    return new OrganizationSignerRemoval__Params(this);
  }
}

export class OrganizationSignerRemoval__Params {
  _event: OrganizationSignerRemoval;

  constructor(event: OrganizationSignerRemoval) {
    this._event = event;
  }

  get _orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _signer(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Organization__getOrganizationResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get approvers(): Array<Address> {
    return this[3].toAddressArray();
  }

  get signers(): Array<Address> {
    return this[4].toAddressArray();
  }

  get isInitialized(): boolean {
    return this[5].toBoolean();
  }

  get isArchived(): boolean {
    return this[6].toBoolean();
  }
}

export class Organization__getOrganizationConfigResultValue0Struct extends ethereum.Tuple {
  get orgId(): BigInt {
    return this[0].toBigInt();
  }

  get requiredTaskApprovals(): BigInt {
    return this[1].toBigInt();
  }

  get requiredConfirmations(): BigInt {
    return this[2].toBigInt();
  }

  get rewardMultiplier(): BigInt {
    return this[3].toBigInt();
  }

  get rewardToken(): Address {
    return this[4].toAddress();
  }

  get rewardSlashMultiplier(): BigInt {
    return this[5].toBigInt();
  }

  get slashRewardEvery(): BigInt {
    return this[6].toBigInt();
  }
}

export class Organization extends ethereum.SmartContract {
  static bind(address: Address): Organization {
    return new Organization("Organization", address);
  }

  createOrg(
    name: string,
    description: string,
    approvers: Array<Address>,
    signers: Array<Address>,
    initializeConfig: boolean
  ): BigInt {
    let result = super.call(
      "createOrg",
      "createOrg(string,string,address[],address[],bool):(uint256)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(description),
        ethereum.Value.fromAddressArray(approvers),
        ethereum.Value.fromAddressArray(signers),
        ethereum.Value.fromBoolean(initializeConfig)
      ]
    );

    return result[0].toBigInt();
  }

  try_createOrg(
    name: string,
    description: string,
    approvers: Array<Address>,
    signers: Array<Address>,
    initializeConfig: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createOrg",
      "createOrg(string,string,address[],address[],bool):(uint256)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(description),
        ethereum.Value.fromAddressArray(approvers),
        ethereum.Value.fromAddressArray(signers),
        ethereum.Value.fromBoolean(initializeConfig)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  doesOrgExists(_orgId: BigInt): boolean {
    let result = super.call("doesOrgExists", "doesOrgExists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_orgId)
    ]);

    return result[0].toBoolean();
  }

  try_doesOrgExists(_orgId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "doesOrgExists",
      "doesOrgExists(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApprovers(_orgId: BigInt): Array<Address> {
    let result = super.call(
      "getApprovers",
      "getApprovers(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );

    return result[0].toAddressArray();
  }

  try_getApprovers(_orgId: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getApprovers",
      "getApprovers(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getOrgCount(): BigInt {
    let result = super.call("getOrgCount", "getOrgCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getOrgCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getOrgCount", "getOrgCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOrgIds(from: BigInt, to: BigInt): Array<BigInt> {
    let result = super.call(
      "getOrgIds",
      "getOrgIds(uint256,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getOrgIds(from: BigInt, to: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getOrgIds",
      "getOrgIds(uint256,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getOrganization(
    _orgId: BigInt
  ): Organization__getOrganizationResultValue0Struct {
    let result = super.call(
      "getOrganization",
      "getOrganization(uint256):((uint256,string,string,address[],address[],bool,bool))",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );

    return changetype<Organization__getOrganizationResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getOrganization(
    _orgId: BigInt
  ): ethereum.CallResult<Organization__getOrganizationResultValue0Struct> {
    let result = super.tryCall(
      "getOrganization",
      "getOrganization(uint256):((uint256,string,string,address[],address[],bool,bool))",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Organization__getOrganizationResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getOrganizationConfig(
    _orgId: BigInt
  ): Organization__getOrganizationConfigResultValue0Struct {
    let result = super.call(
      "getOrganizationConfig",
      "getOrganizationConfig(uint256):((uint256,uint256,uint256,uint256,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );

    return changetype<Organization__getOrganizationConfigResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getOrganizationConfig(
    _orgId: BigInt
  ): ethereum.CallResult<
    Organization__getOrganizationConfigResultValue0Struct
  > {
    let result = super.tryCall(
      "getOrganizationConfig",
      "getOrganizationConfig(uint256):((uint256,uint256,uint256,uint256,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Organization__getOrganizationConfigResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getRewardMultiplier(orgId: BigInt, tags: Array<BigInt>): BigInt {
    let result = super.call(
      "getRewardMultiplier",
      "getRewardMultiplier(uint256,uint256[]):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromUnsignedBigIntArray(tags)
      ]
    );

    return result[0].toBigInt();
  }

  try_getRewardMultiplier(
    orgId: BigInt,
    tags: Array<BigInt>
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRewardMultiplier",
      "getRewardMultiplier(uint256,uint256[]):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromUnsignedBigIntArray(tags)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSigners(_orgId: BigInt): Array<Address> {
    let result = super.call("getSigners", "getSigners(uint256):(address[])", [
      ethereum.Value.fromUnsignedBigInt(_orgId)
    ]);

    return result[0].toAddressArray();
  }

  try_getSigners(_orgId: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getSigners",
      "getSigners(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getTaskApprovals(_orgId: BigInt): BigInt {
    let result = super.call(
      "getTaskApprovals",
      "getTaskApprovals(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );

    return result[0].toBigInt();
  }

  try_getTaskApprovals(_orgId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTaskApprovals",
      "getTaskApprovals(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApproverAddress(_orgId: BigInt, _address: Address): boolean {
    let result = super.call(
      "isApproverAddress",
      "isApproverAddress(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_orgId),
        ethereum.Value.fromAddress(_address)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApproverAddress(
    _orgId: BigInt,
    _address: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApproverAddress",
      "isApproverAddress(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_orgId),
        ethereum.Value.fromAddress(_address)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isSignerAddress(_orgId: BigInt, _address: Address): boolean {
    let result = super.call(
      "isSignerAddress",
      "isSignerAddress(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_orgId),
        ethereum.Value.fromAddress(_address)
      ]
    );

    return result[0].toBoolean();
  }

  try_isSignerAddress(
    _orgId: BigInt,
    _address: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isSignerAddress",
      "isSignerAddress(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_orgId),
        ethereum.Value.fromAddress(_address)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

export class AddOrgConfigCall extends ethereum.Call {
  get inputs(): AddOrgConfigCall__Inputs {
    return new AddOrgConfigCall__Inputs(this);
  }

  get outputs(): AddOrgConfigCall__Outputs {
    return new AddOrgConfigCall__Outputs(this);
  }
}

export class AddOrgConfigCall__Inputs {
  _call: AddOrgConfigCall;

  constructor(call: AddOrgConfigCall) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get rewardMultiplier(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get rewardToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get requiredConfirmations(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get requiredTaskApprovals(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get rewardSlashMultiplier(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get slashRewardEvery(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class AddOrgConfigCall__Outputs {
  _call: AddOrgConfigCall;

  constructor(call: AddOrgConfigCall) {
    this._call = call;
  }
}

export class CreateOrgCall extends ethereum.Call {
  get inputs(): CreateOrgCall__Inputs {
    return new CreateOrgCall__Inputs(this);
  }

  get outputs(): CreateOrgCall__Outputs {
    return new CreateOrgCall__Outputs(this);
  }
}

export class CreateOrgCall__Inputs {
  _call: CreateOrgCall;

  constructor(call: CreateOrgCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get approvers(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get signers(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get initializeConfig(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class CreateOrgCall__Outputs {
  _call: CreateOrgCall;

  constructor(call: CreateOrgCall) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExecuteActionCall extends ethereum.Call {
  get inputs(): ExecuteActionCall__Inputs {
    return new ExecuteActionCall__Inputs(this);
  }

  get outputs(): ExecuteActionCall__Outputs {
    return new ExecuteActionCall__Outputs(this);
  }
}

export class ExecuteActionCall__Inputs {
  _call: ExecuteActionCall;

  constructor(call: ExecuteActionCall) {
    this._call = call;
  }

  get _actionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteActionCall__Outputs {
  _call: ExecuteActionCall;

  constructor(call: ExecuteActionCall) {
    this._call = call;
  }
}

export class UpdateActionContractCall extends ethereum.Call {
  get inputs(): UpdateActionContractCall__Inputs {
    return new UpdateActionContractCall__Inputs(this);
  }

  get outputs(): UpdateActionContractCall__Outputs {
    return new UpdateActionContractCall__Outputs(this);
  }
}

export class UpdateActionContractCall__Inputs {
  _call: UpdateActionContractCall;

  constructor(call: UpdateActionContractCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateActionContractCall__Outputs {
  _call: UpdateActionContractCall;

  constructor(call: UpdateActionContractCall) {
    this._call = call;
  }
}

export class UpdateTreasuryContractCall extends ethereum.Call {
  get inputs(): UpdateTreasuryContractCall__Inputs {
    return new UpdateTreasuryContractCall__Inputs(this);
  }

  get outputs(): UpdateTreasuryContractCall__Outputs {
    return new UpdateTreasuryContractCall__Outputs(this);
  }
}

export class UpdateTreasuryContractCall__Inputs {
  _call: UpdateTreasuryContractCall;

  constructor(call: UpdateTreasuryContractCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateTreasuryContractCall__Outputs {
  _call: UpdateTreasuryContractCall;

  constructor(call: UpdateTreasuryContractCall) {
    this._call = call;
  }
}
