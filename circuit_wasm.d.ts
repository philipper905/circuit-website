/* tslint:disable */
export function init(): boolean;

export function is_ok(arg0: ResultWrapper): boolean;

export function unwrap(arg0: ResultWrapper): Path;

export function unwrap_err(arg0: ResultWrapper): Error;

export function error_str(arg0: Error): string;

export function make_path(arg0: string): ResultWrapper;

export function total_resistance(arg0: Path): number;

export function solve(arg0: Path, arg1: number): Circuit;

export function print(arg0: Circuit): string;

export function greet(arg0: string): void;

export class ResultWrapper {
free(): void;
}
export class Path {
free(): void;
}
export class Circuit {
free(): void;
}
export class EditablePath {
free(): void;
}
export class Error {
free(): void;
}
