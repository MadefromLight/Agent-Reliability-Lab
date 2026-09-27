export interface Scenario {id:string; input:string; expected:string; tags?:string[];}
export interface Result {id:string;passed:boolean;actual:string;expected:string;durationMs:number;}
export function evaluate(s:Scenario, agent:(input:string)=>Promise<string>|string):Promise<Result>{
 const start=Date.now();
 return Promise.resolve(agent(s.input)).then(actual=>({id:s.id,passed:actual===s.expected,actual,expected:s.expected,durationMs:Date.now()-start}));
}
export async function runSuite(scenarios:Scenario[],agent:(input:string)=>Promise<string>|string){
 return Promise.all(scenarios.map(s=>evaluate(s,agent)));
}