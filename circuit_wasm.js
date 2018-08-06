/* tslint:disable */
import * as wasm from './circuit_wasm_bg';

/**
* @returns {boolean}
*/
export function init() {
    return (wasm.init()) !== 0;
}

/**
* @param {ResultWrapper} arg0
* @returns {boolean}
*/
export function is_ok(arg0) {
    return (wasm.is_ok(arg0.ptr)) !== 0;
}

/**
* @param {ResultWrapper} arg0
* @returns {Path}
*/
export function unwrap(arg0) {
    const ptr0 = arg0.ptr;
    if (ptr0 === 0) {
        throw new Error('Attempt to use a moved value');
    }
    arg0.ptr = 0;
    return Path.__construct(wasm.unwrap(ptr0));
}

/**
* @param {ResultWrapper} arg0
* @returns {Error}
*/
export function unwrap_err(arg0) {
    const ptr0 = arg0.ptr;
    if (ptr0 === 0) {
        throw new Error('Attempt to use a moved value');
    }
    arg0.ptr = 0;
    return Error.__construct(wasm.unwrap_err(ptr0));
}

const TextDecoder = typeof self === 'object' && self.TextDecoder
    ? self.TextDecoder
    : require('util').TextDecoder;

let cachedDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}
/**
* @param {Error} arg0
* @returns {string}
*/
export function error_str(arg0) {
    const ptr0 = arg0.ptr;
    if (ptr0 === 0) {
        throw new Error('Attempt to use a moved value');
    }
    arg0.ptr = 0;
    const retptr = globalArgumentPtr();
    wasm.error_str(retptr, ptr0);
    const mem = getUint32Memory();
    const ptr = mem[retptr / 4];
    const len = mem[retptr / 4 + 1];
    
    const realRet = getStringFromWasm(ptr, len).slice();
    wasm.__wbindgen_free(ptr, len * 1);
    return realRet;
    
}

const TextEncoder = typeof self === 'object' && self.TextEncoder
    ? self.TextEncoder
    : require('util').TextEncoder;

let cachedEncoder = new TextEncoder('utf-8');

function passStringToWasm(arg) {
    
    const buf = cachedEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    return [ptr, buf.length];
}
/**
* @param {string} arg0
* @returns {ResultWrapper}
*/
export function make_path(arg0) {
    const [ptr0, len0] = passStringToWasm(arg0);
    try {
        return ResultWrapper.__construct(wasm.make_path(ptr0, len0));
        
    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        
    }
    
}

/**
* @param {Path} arg0
* @returns {number}
*/
export function total_resistance(arg0) {
    return wasm.total_resistance(arg0.ptr);
}

/**
* @param {Path} arg0
* @param {number} arg1
* @returns {Circuit}
*/
export function solve(arg0, arg1) {
    const ptr0 = arg0.ptr;
    if (ptr0 === 0) {
        throw new Error('Attempt to use a moved value');
    }
    arg0.ptr = 0;
    return Circuit.__construct(wasm.solve(ptr0, arg1));
}

/**
* @param {Circuit} arg0
* @returns {string}
*/
export function print(arg0) {
    const ptr0 = arg0.ptr;
    if (ptr0 === 0) {
        throw new Error('Attempt to use a moved value');
    }
    arg0.ptr = 0;
    const retptr = globalArgumentPtr();
    wasm.print(retptr, ptr0);
    const mem = getUint32Memory();
    const ptr = mem[retptr / 4];
    const len = mem[retptr / 4 + 1];
    
    const realRet = getStringFromWasm(ptr, len).slice();
    wasm.__wbindgen_free(ptr, len * 1);
    return realRet;
    
}

export function __wbg_alert_e56d50f0a8c1b697(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    alert(varg0);
}
/**
* @param {string} arg0
* @returns {void}
*/
export function greet(arg0) {
    const [ptr0, len0] = passStringToWasm(arg0);
    try {
        return wasm.greet(ptr0, len0);
        
    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
        
    }
    
}

const __wbg_error_437173f44e4e09fc_target = console.error;

export function __wbg_error_437173f44e4e09fc(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    
    varg0 = varg0.slice();
    wasm.__wbindgen_free(arg0, arg1 * 1);
    
    __wbg_error_437173f44e4e09fc_target(varg0);
}
/**
*/
export class ResultWrapper {
    
    static __construct(ptr) {
        return new ResultWrapper(ptr);
    }
    
    constructor(ptr) {
        this.ptr = ptr;
    }
    
    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        wasm.__wbg_resultwrapper_free(ptr);
    }
}
/**
*/
export class Path {
    
    static __construct(ptr) {
        return new Path(ptr);
    }
    
    constructor(ptr) {
        this.ptr = ptr;
    }
    
    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        wasm.__wbg_path_free(ptr);
    }
}
/**
*/
export class Circuit {
    
    static __construct(ptr) {
        return new Circuit(ptr);
    }
    
    constructor(ptr) {
        this.ptr = ptr;
    }
    
    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        wasm.__wbg_circuit_free(ptr);
    }
}
/**
*/
export class EditablePath {
    
    static __construct(ptr) {
        return new EditablePath(ptr);
    }
    
    constructor(ptr) {
        this.ptr = ptr;
    }
    
    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        wasm.__wbg_editablepath_free(ptr);
    }
}
/**
*/
export class Error {
    
    static __construct(ptr) {
        return new Error(ptr);
    }
    
    constructor(ptr) {
        this.ptr = ptr;
    }
    
    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        wasm.__wbg_error_free(ptr);
    }
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

