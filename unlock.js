(() => {
  const root = document.getElementById("root");
  const key = Object.keys(root).find(k => k.startsWith("__reactContainer$"));
  const fiber = root[key];
  const pending = [fiber?.stateNode?.current || fiber];

  while (pending.length) {
    const node = pending.pop();
    if (!node) continue;
    const auth = node.tag === 10 && node.memoizedProps?.value;
    if (auth?.loggedIn && Array.isArray(auth.roles) &&
        typeof auth.setAuth === "function") {
      auth.setAuth({
        ...auth,
        roles: [...new Set([...auth.roles, "STATS_ACCESS"])]
      });
      return;
    }
    pending.push(node.child, node.sibling);
  }
  throw new Error("be signed in");
})();
