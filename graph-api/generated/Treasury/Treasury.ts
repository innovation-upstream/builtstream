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

export class TreasuryDeposit extends ethereum.Event {
  get params(): TreasuryDeposit__Params {
    return new TreasuryDeposit__Params(this);
  }
}

export class TreasuryDeposit__Params {
  _event: TreasuryDeposit;

  constructor(event: TreasuryDeposit) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TreasuryTokenLocked extends ethereum.Event {
  get params(): TreasuryTokenLocked__Params {
    return new TreasuryTokenLocked__Params(this);
  }
}

export class TreasuryTokenLocked__Params {
  _event: TreasuryTokenLocked;

  constructor(event: TreasuryTokenLocked) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TreasuryTokenUnlocked extends ethereum.Event {
  get params(): TreasuryTokenUnlocked__Params {
    return new TreasuryTokenUnlocked__Params(this);
  }
}

export class TreasuryTokenUnlocked__Params {
  _event: TreasuryTokenUnlocked;

  constructor(event: TreasuryTokenUnlocked) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TreasuryWithdraw extends ethereum.Event {
  get params(): TreasuryWithdraw__Params {
    return new TreasuryWithdraw__Params(this);
  }
}

export class TreasuryWithdraw__Params {
  _event: TreasuryWithdraw;

  constructor(event: TreasuryWithdraw) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Treasury extends ethereum.SmartContract {
  static bind(address: Address): Treasury {
    return new Treasury("Treasury", address);
  }

  getBalance(orgId: BigInt): BigInt {
    let result = super.call("getBalance", "getBalance(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(orgId)
    ]);

    return result[0].toBigInt();
  }

  try_getBalance(orgId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getBalance", "getBalance(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(orgId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBalance1(orgId: BigInt, tokenAddress: Address): BigInt {
    let result = super.call(
      "getBalance",
      "getBalance(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromAddress(tokenAddress)
      ]
    );

    return result[0].toBigInt();
  }

  try_getBalance1(
    orgId: BigInt,
    tokenAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBalance",
      "getBalance(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromAddress(tokenAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLockedBalance(orgId: BigInt): BigInt {
    let result = super.call(
      "getLockedBalance",
      "getLockedBalance(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(orgId)]
    );

    return result[0].toBigInt();
  }

  try_getLockedBalance(orgId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLockedBalance",
      "getLockedBalance(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLockedBalance1(orgId: BigInt, tokenAddress: Address): BigInt {
    let result = super.call(
      "getLockedBalance",
      "getLockedBalance(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromAddress(tokenAddress)
      ]
    );

    return result[0].toBigInt();
  }

  try_getLockedBalance1(
    orgId: BigInt,
    tokenAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLockedBalance",
      "getLockedBalance(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromAddress(tokenAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOrgTokens(orgId: BigInt): Array<Address> {
    let result = super.call(
      "getOrgTokens",
      "getOrgTokens(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(orgId)]
    );

    return result[0].toAddressArray();
  }

  try_getOrgTokens(orgId: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getOrgTokens",
      "getOrgTokens(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
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

  get _organizationAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _taskContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class Deposit1Call extends ethereum.Call {
  get inputs(): Deposit1Call__Inputs {
    return new Deposit1Call__Inputs(this);
  }

  get outputs(): Deposit1Call__Outputs {
    return new Deposit1Call__Outputs(this);
  }
}

export class Deposit1Call__Inputs {
  _call: Deposit1Call;

  constructor(call: Deposit1Call) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class Deposit1Call__Outputs {
  _call: Deposit1Call;

  constructor(call: Deposit1Call) {
    this._call = call;
  }
}

export class LockBalanceCall extends ethereum.Call {
  get inputs(): LockBalanceCall__Inputs {
    return new LockBalanceCall__Inputs(this);
  }

  get outputs(): LockBalanceCall__Outputs {
    return new LockBalanceCall__Outputs(this);
  }
}

export class LockBalanceCall__Inputs {
  _call: LockBalanceCall;

  constructor(call: LockBalanceCall) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class LockBalanceCall__Outputs {
  _call: LockBalanceCall;

  constructor(call: LockBalanceCall) {
    this._call = call;
  }
}

export class LockBalance1Call extends ethereum.Call {
  get inputs(): LockBalance1Call__Inputs {
    return new LockBalance1Call__Inputs(this);
  }

  get outputs(): LockBalance1Call__Outputs {
    return new LockBalance1Call__Outputs(this);
  }
}

export class LockBalance1Call__Inputs {
  _call: LockBalance1Call;

  constructor(call: LockBalance1Call) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class LockBalance1Call__Outputs {
  _call: LockBalance1Call;

  constructor(call: LockBalance1Call) {
    this._call = call;
  }
}

export class RewardCall extends ethereum.Call {
  get inputs(): RewardCall__Inputs {
    return new RewardCall__Inputs(this);
  }

  get outputs(): RewardCall__Outputs {
    return new RewardCall__Outputs(this);
  }
}

export class RewardCall__Inputs {
  _call: RewardCall;

  constructor(call: RewardCall) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class RewardCall__Outputs {
  _call: RewardCall;

  constructor(call: RewardCall) {
    this._call = call;
  }
}

export class Reward1Call extends ethereum.Call {
  get inputs(): Reward1Call__Inputs {
    return new Reward1Call__Inputs(this);
  }

  get outputs(): Reward1Call__Outputs {
    return new Reward1Call__Outputs(this);
  }
}

export class Reward1Call__Inputs {
  _call: Reward1Call;

  constructor(call: Reward1Call) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class Reward1Call__Outputs {
  _call: Reward1Call;

  constructor(call: Reward1Call) {
    this._call = call;
  }
}

export class UnlockBalanceCall extends ethereum.Call {
  get inputs(): UnlockBalanceCall__Inputs {
    return new UnlockBalanceCall__Inputs(this);
  }

  get outputs(): UnlockBalanceCall__Outputs {
    return new UnlockBalanceCall__Outputs(this);
  }
}

export class UnlockBalanceCall__Inputs {
  _call: UnlockBalanceCall;

  constructor(call: UnlockBalanceCall) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnlockBalanceCall__Outputs {
  _call: UnlockBalanceCall;

  constructor(call: UnlockBalanceCall) {
    this._call = call;
  }
}

export class UnlockBalance1Call extends ethereum.Call {
  get inputs(): UnlockBalance1Call__Inputs {
    return new UnlockBalance1Call__Inputs(this);
  }

  get outputs(): UnlockBalance1Call__Outputs {
    return new UnlockBalance1Call__Outputs(this);
  }
}

export class UnlockBalance1Call__Inputs {
  _call: UnlockBalance1Call;

  constructor(call: UnlockBalance1Call) {
    this._call = call;
  }

  get orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UnlockBalance1Call__Outputs {
  _call: UnlockBalance1Call;

  constructor(call: UnlockBalance1Call) {
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

export class WithdrawForceCall extends ethereum.Call {
  get inputs(): WithdrawForceCall__Inputs {
    return new WithdrawForceCall__Inputs(this);
  }

  get outputs(): WithdrawForceCall__Outputs {
    return new WithdrawForceCall__Outputs(this);
  }
}

export class WithdrawForceCall__Inputs {
  _call: WithdrawForceCall;

  constructor(call: WithdrawForceCall) {
    this._call = call;
  }

  get actionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get orgId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class WithdrawForceCall__Outputs {
  _call: WithdrawForceCall;

  constructor(call: WithdrawForceCall) {
    this._call = call;
  }
}

export class WithdrawForce1Call extends ethereum.Call {
  get inputs(): WithdrawForce1Call__Inputs {
    return new WithdrawForce1Call__Inputs(this);
  }

  get outputs(): WithdrawForce1Call__Outputs {
    return new WithdrawForce1Call__Outputs(this);
  }
}

export class WithdrawForce1Call__Inputs {
  _call: WithdrawForce1Call;

  constructor(call: WithdrawForce1Call) {
    this._call = call;
  }

  get actionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get orgId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class WithdrawForce1Call__Outputs {
  _call: WithdrawForce1Call;

  constructor(call: WithdrawForce1Call) {
    this._call = call;
  }
}
