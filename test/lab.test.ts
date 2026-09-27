import test from "node:test"; import assert from "node:assert/strict"; import {evaluate} from "../src/index.js";
test("passes expected output",async()=>assert.equal((await evaluate({id:"1",input:"x",expected:"x"},()=> "x")).passed,true));
test("fails unexpected output",async()=>assert.equal((await evaluate({id:"1",input:"x",expected:"y"},()=> "x")).passed,false));