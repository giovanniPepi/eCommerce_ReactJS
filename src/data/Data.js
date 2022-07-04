import gpus from "./gpus";
import monitors from "./monitors";
import motherboards from "./motherboards";
import processors from "./processors";
import ram from "./rams";

const data = [...processors, ...ram, ...monitors, ...motherboards, ...gpus];

export default data;
