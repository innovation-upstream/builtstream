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

export class ActionConfirmation extends ethereum.Event {
  get params(): ActionConfirmation__Params {
    return new ActionConfirmation__Params(this);
  }
}

export class ActionConfirmation__Params {
  _event: ActionConfirmation;

  constructor(event: ActionConfirmation) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get actionId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ActionCreation extends ethereum.Event {
  get params(): ActionCreation__Params {
    return new ActionCreation__Params(this);
  }
}

export class ActionCreation__Params {
  _event: ActionCreation;

  constructor(event: ActionCreation) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get actionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ActionExecution extends ethereum.Event {
  get params(): ActionExecution__Params {
    return new ActionExecution__Params(this);
  }
}

export class ActionExecution__Params {
  _event: ActionExecution;

  constructor(event: ActionExecution) {
    this._event = event;
  }

  get orgId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get actionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ActionContract__getActionResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get orgId(): BigInt {
    return this[1].toBigInt();
  }

  get initiator(): Address {
    return this[2].toAddress();
  }

  get targetAddress(): Address {
    return this[3].toAddress();
  }

  get value(): BigInt {
    return this[4].toBigInt();
  }

  get data(): Bytes {
    return this[5].toBytes();
  }

  get executed(): boolean {
    return this[6].toBoolean();
  }

  get tokenAddress(): Address {
    return this[7].toAddress();
  }

  get actionType(): i32 {
    return this[8].toI32();
  }
}

export class ActionContract extends ethereum.SmartContract {
  static bind(address: Address): ActionContract {
    return new ActionContract("ActionContract", address);
  }

  createAction(
    _orgId: BigInt,
    targetAddress: Address,
    actionType: i32,
    data: Bytes,
    value: BigInt
  ): BigInt {
    let result = super.call(
      "createAction",
      "createAction(uint256,address,uint8,bytes,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_orgId),
        ethereum.Value.fromAddress(targetAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(actionType)),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );

    return result[0].toBigInt();
  }

  try_createAction(
    _orgId: BigInt,
    targetAddress: Address,
    actionType: i32,
    data: Bytes,
    value: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAction",
      "createAction(uint256,address,uint8,bytes,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_orgId),
        ethereum.Value.fromAddress(targetAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(actionType)),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromUnsignedBigInt(value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createAction1(
    _orgId: BigInt,
    targetAddress: Address,
    value: BigInt,
    tokenAddress: Address,
    actionType: i32,
    data: Bytes
  ): BigInt {
    let result = super.call(
      "createAction",
      "createAction(uint256,address,uint256,address,uint8,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_orgId),
        ethereum.Value.fromAddress(targetAddress),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(actionType)),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBigInt();
  }

  try_createAction1(
    _orgId: BigInt,
    targetAddress: Address,
    value: BigInt,
    tokenAddress: Address,
    actionType: i32,
    data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAction",
      "createAction(uint256,address,uint256,address,uint8,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_orgId),
        ethereum.Value.fromAddress(targetAddress),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(actionType)),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  doesActionExist(_actionId: BigInt): boolean {
    let result = super.call(
      "doesActionExist",
      "doesActionExist(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );

    return result[0].toBoolean();
  }

  try_doesActionExist(_actionId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "doesActionExist",
      "doesActionExist(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAction(_actionId: BigInt): ActionContract__getActionResultValue0Struct {
    let result = super.call(
      "getAction",
      "getAction(uint256):((uint256,uint256,address,address,uint256,bytes,bool,address,uint8))",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );

    return changetype<ActionContract__getActionResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getAction(
    _actionId: BigInt
  ): ethereum.CallResult<ActionContract__getActionResultValue0Struct> {
    let result = super.tryCall(
      "getAction",
      "getAction(uint256):((uint256,uint256,address,address,uint256,bytes,bool,address,uint8))",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ActionContract__getActionResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getActionCount(_orgId: BigInt): BigInt {
    let result = super.call(
      "getActionCount",
      "getActionCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );

    return result[0].toBigInt();
  }

  try_getActionCount(_orgId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getActionCount",
      "getActionCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_orgId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getActionIds(orgId: BigInt, from: BigInt, to: BigInt): Array<BigInt> {
    let result = super.call(
      "getActionIds",
      "getActionIds(uint256,uint256,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getActionIds(
    orgId: BigInt,
    from: BigInt,
    to: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getActionIds",
      "getActionIds(uint256,uint256,uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(orgId),
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

  getConfirmers(_actionId: BigInt): Array<Address> {
    let result = super.call(
      "getConfirmers",
      "getConfirmers(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );

    return result[0].toAddressArray();
  }

  try_getConfirmers(_actionId: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getConfirmers",
      "getConfirmers(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  isActionConfirmed(_actionId: BigInt): boolean {
    let result = super.call(
      "isActionConfirmed",
      "isActionConfirmed(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );

    return result[0].toBoolean();
  }

  try_isActionConfirmed(_actionId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isActionConfirmed",
      "isActionConfirmed(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isActionExecuted(_actionId: BigInt): boolean {
    let result = super.call(
      "isActionExecuted",
      "isActionExecuted(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
    );

    return result[0].toBoolean();
  }

  try_isActionExecuted(_actionId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isActionExecuted",
      "isActionExecuted(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_actionId)]
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

  get _organizationAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConfirmActionCall extends ethereum.Call {
  get inputs(): ConfirmActionCall__Inputs {
    return new ConfirmActionCall__Inputs(this);
  }

  get outputs(): ConfirmActionCall__Outputs {
    return new ConfirmActionCall__Outputs(this);
  }
}

export class ConfirmActionCall__Inputs {
  _call: ConfirmActionCall;

  constructor(call: ConfirmActionCall) {
    this._call = call;
  }

  get _actionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConfirmActionCall__Outputs {
  _call: ConfirmActionCall;

  constructor(call: ConfirmActionCall) {
    this._call = call;
  }
}

export class CreateActionCall extends ethereum.Call {
  get inputs(): CreateActionCall__Inputs {
    return new CreateActionCall__Inputs(this);
  }

  get outputs(): CreateActionCall__Outputs {
    return new CreateActionCall__Outputs(this);
  }
}

export class CreateActionCall__Inputs {
  _call: CreateActionCall;

  constructor(call: CreateActionCall) {
    this._call = call;
  }

  get _orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get targetAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get actionType(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get value(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateActionCall__Outputs {
  _call: CreateActionCall;

  constructor(call: CreateActionCall) {
    this._call = call;
  }

  get actionId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateAction1Call extends ethereum.Call {
  get inputs(): CreateAction1Call__Inputs {
    return new CreateAction1Call__Inputs(this);
  }

  get outputs(): CreateAction1Call__Outputs {
    return new CreateAction1Call__Outputs(this);
  }
}

export class CreateAction1Call__Inputs {
  _call: CreateAction1Call;

  constructor(call: CreateAction1Call) {
    this._call = call;
  }

  get _orgId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get targetAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get actionType(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get data(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class CreateAction1Call__Outputs {
  _call: CreateAction1Call;

  constructor(call: CreateAction1Call) {
    this._call = call;
  }

  get actionId(): BigInt {
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
