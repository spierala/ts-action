/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/ts-action
 */

import {
    Action,
    ActionConstructor,
    ActionWithType,
    ActionWithTypeConstructor,
    ActionWithPayload,
    ActionWithPayloadConstructor,
    ActionWithDefaultPayloadConstructor,
    ActionWithPropsConstructor,
    ActionWithDefaultPropsConstructor
} from "./interfaces";

export function isType<T extends string, P>(action: Action, constructor: ActionWithDefaultPayloadConstructor<T, P>): action is ActionWithPayload<T, P>;
export function isType<T extends string, P>(action: Action, constructor: ActionWithPayloadConstructor<T, P>): action is ActionWithPayload<T, P>;
export function isType<T extends string, P extends object>(action: Action, constructor: ActionWithDefaultPropsConstructor<T, P>): action is ActionWithType<T> & P;
export function isType<T extends string, P extends object>(action: Action, constructor: ActionWithPropsConstructor<T, P>): action is ActionWithType<T> & P;
export function isType<T extends string>(action: Action, constructor: ActionWithTypeConstructor<T>): action is ActionWithType<T>;
export function isType<T extends string, P>(action: Action, constructor: ActionConstructor<T>): action is Action<T> {
    return action.type === constructor.type;
}