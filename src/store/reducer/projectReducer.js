const initState = {
  projects: [
    { id: "1", title: "Save Nezuko", content: "blah blah blah" },
    { id: "2", title: "Slay some demons", content: "blah blah blah" },
    { id: "3", title: "Fight Muzan", content: "blah blah blah" }
  ]
};

export default function projectReducer(state = initState, action) {
  return state;
}
