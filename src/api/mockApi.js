// Dummy in-memory data and API simulation
export let crops = [
  { id: 1, name: "Wheat", sowingDate: "2025-06-10", harvestDate: "2025-12-10", soilType: "Sandy Loam" },
  { id: 2, name: "Paddy", sowingDate: "2025-07-01", harvestDate: "2025-11-25", soilType: "Clay Loam" }
];
export let tasks = [
  { id: 1, cropId: 1, task: "Watering", dueDate: "2025-06-12", status: "pending" },
  { id: 2, cropId: 2, task: "Fertilizer", dueDate: "2025-07-14", status: "completed" }
];

// Simulate fetching data
export const fetchCrops = () => Promise.resolve(crops);
export const fetchTasks = () => Promise.resolve(tasks);
export const addCrop = crop => {
  crops.push({ id: crops.length+1, ...crop });
  return Promise.resolve();
}
export const addTask = task => {
  tasks.push({ id: tasks.length+1, ...task });
  return Promise.resolve();
}
