function renameDesktops() {
	for (var i = 0; i < workspace.desktops.length; i++) {
		var newName = (i + 1).toString();
		if (workspace.desktops[i].name !== newName) {
			workspace.desktops[i].name = newName;
		}
	}
}

// Run once on startup
renameDesktops();

// Watch for when desktops are added or removed
workspace.desktopsChanged.connect(renameDesktops);
