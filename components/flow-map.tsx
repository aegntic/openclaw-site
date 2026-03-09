const stages = [
  "Human intent",
  "Operator",
  "Registry",
  "Dispatcher",
  "Scheduler",
  "Workers",
  "Artifacts",
  "Evaluator / Repair"
] as const;

export function FlowMap() {
  return (
    <div className="flow-map" aria-label="OpenClaw system flow">
      {stages.map((stage, index) => (
        <div key={stage} className="flow-node">
          <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
          <strong>{stage}</strong>
        </div>
      ))}
    </div>
  );
}
