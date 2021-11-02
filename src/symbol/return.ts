/**
 * @author WMXPY
 * @namespace Symbol
 * @description Return
 */

export const EmptyReturnSymbolText: string = 'return-empty-return';
export const EmptyReturnSymbol: unique symbol = Symbol.for(EmptyReturnSymbolText);
export type SEmptyReturn = typeof EmptyReturnSymbol;
