export async function fetchTasks() {
  try {
    const response = await fetch("http://localhost:5000/api/v1/");

    if (!response.ok) {
      throw new Error("Failed to get you request!");
    }

    const { tasks } = await response.json();

    return tasks;
  } catch (error) {
    console.error(error);
  }
}
