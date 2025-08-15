// src/lib/phaseAlignWeeks.js
export function phaseAlignWeeks(tasks) {
  const map = { W1:1, W2:5, W3:8, W4:12 };
  return tasks.map(t => {
    const m = t.key.match(/\.W([1-4])$/);
    if (!m) return t;
    return { ...t, week: map[`W${m[1]}`] };
  });
}
export default phaseAlignWeeks;
