Kash = {};

Kash.namespace = function (namespace, alias) {
    if (typeof(namespace) === 'string') {
        var parts = namespace.split('.');
        var parent = window;
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            parent[part] = parent[part] || {};
            parent = parent[part];
        }
        if (typeof(alias) === 'string') {
            window[alias] = parent;
        }
        return parent;
    }
    return null;
};