const STORAGE_KEY = 'wwii-battle-plans';

export function savePlan(name, data) {
  const plans = getAllPlans();
  plans[name] = {
    data,
    savedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
}

export function loadPlan(name) {
  const plans = getAllPlans();
  return plans[name] ? plans[name].data : null;
}

export function deletePlan(name) {
  const plans = getAllPlans();
  delete plans[name];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
}

export function getAllPlans() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getPlanNames() {
  const plans = getAllPlans();
  return Object.keys(plans).sort();
}

export function exportPlanAsJSON(name, data) {
  const exportData = {
    name,
    exportedAt: new Date().toISOString(),
    version: '1.0',
    app: 'WWII Battle Planner — 1939 Strategic Command',
    items: data,
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `battle-plan-${name.replace(/\s+/g, '-').toLowerCase()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
