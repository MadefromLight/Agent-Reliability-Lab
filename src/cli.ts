import {readFile} from "node:fs/promises";
import {runSuite} from "./index.js";
const path=process.argv[2]; if(!path){console.error("Usage: npm run eval -- suite.json");process.exit(1);}
const suite=JSON.parse(await readFile(path,"utf8"));
const results=await runSuite(suite, input=>input);
console.log(JSON.stringify({results,passed:results.every(r=>r.passed)},null,2));