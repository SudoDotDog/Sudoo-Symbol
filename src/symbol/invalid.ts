/**
 * @author WMXPY
 * @namespace Symbol
 * @description Parse
 */

export const InvalidJSONSymbolText: string = 'parse-invalid-json';
export const InvalidJSONSymbol: unique symbol = Symbol.for(InvalidJSONSymbolText);
export type SInvalidJSON = typeof InvalidJSONSymbol;
