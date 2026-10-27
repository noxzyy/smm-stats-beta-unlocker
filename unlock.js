(() => {
 var hosts = [document, document.documentElement, document.body]
let fiber = null
for (const host of hosts) {
 // react container key
const key = Object.getOwnPropertyNames(host).find(n => n.startsWith("__reactContainer$"));
if (!key) { continue }
        const node = host[key]
fiber = node?.stateNode?.current || node; break }
if (!fiber) throw new Error("no react root")

    const pending = [fiber]
while (pending.length) {
const node = pending.pop();
        if (!node) continue
const auth = node.tag === 10 && node.memoizedProps?.value  // context providers
if (auth?.loggedIn && Array.isArray(auth.roles) && typeof auth.setUser == "function") {
auth.setUser((prev) => {
return {
...prev,
 // add the stats role
roles: prev.roles.some((role) => role?.name === "stats")
 ? prev.roles
 : prev.roles.concat([{ name: "stats" }])
}
})
return }
pending.push(node.child, node.sibling)
}
throw new Error("be signed in")
})();
