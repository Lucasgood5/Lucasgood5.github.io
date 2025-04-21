AllLevels.set(1, {
    lvlHeight: 11,
    lvlWidth: 11,
    WallMap: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
    ],
    PacManStartingCoordinates: { row: 1, col: 5 },
    GhostToSpawnList: [
        { row: 5, col: 5, pathfindingStrategy: new DirectPathfindingStrategy(), speedratio: 0.9, image: "corleonne" },
        { row: 6, col: 5, pathfindingStrategy: new AStarPathfindingStrategy(), speedratio: 0.9, image: "doyenne" },
    ],
    CollictablesToSpawnList: [
        { type: "beer", col: 5, row: 9, },
        { type: "coin", col: 1, row: 1, args: [2] },
        { type: "coin", col: 2, row: 1, },
        { type: "coin", col: 3, row: 1, },
        { type: "coin", col: 4, row: 1, },
        { type: "coin", col: 6, row: 1, },
        { type: "coin", col: 7, row: 1, },
        { type: "coin", col: 8, row: 1, },
        { type: "coin", col: 9, row: 1, args: [2] },
        { type: "coin", col: 1, row: 2, },
        { type: "coin", col: 5, row: 2, },
        { type: "coin", col: 9, row: 2, },
        { type: "coin", col: 1, row: 3, },
        { type: "coin", col: 3, row: 3, },
        { type: "coin", col: 4, row: 3, },
        { type: "coin", col: 5, row: 3, args: [2] },
        { type: "coin", col: 6, row: 3, },
        { type: "coin", col: 7, row: 3, },
        { type: "coin", col: 9, row: 3, },
        { type: "coin", col: 1, row: 4, },
        { type: "coin", col: 2, row: 4, },
        { type: "coin", col: 3, row: 4, },
        { type: "coin", col: 7, row: 4, },
        { type: "coin", col: 8, row: 4, },
        { type: "coin", col: 9, row: 4, },
        { type: "coin", col: 1, row: 5, },
        { type: "coin", col: 3, row: 5, },
        { type: "coin", col: 7, row: 5, },
        { type: "coin", col: 9, row: 5, },
        { type: "coin", col: 1, row: 6, },
        { type: "coin", col: 3, row: 6, },
        { type: "coin", col: 7, row: 6, },
        { type: "coin", col: 9, row: 6, },
        { type: "coin", col: 1, row: 7, },
        { type: "coin", col: 3, row: 7, },
        { type: "coin", col: 7, row: 7, },
        { type: "coin", col: 9, row: 7, },
        { type: "coin", col: 1, row: 8, },
        { type: "coin", col: 3, row: 8, },
        { type: "coin", col: 4, row: 8, },
        { type: "coin", col: 5, row: 8, },
        { type: "coin", col: 6, row: 8, },
        { type: "coin", col: 7, row: 8, },
        { type: "coin", col: 9, row: 8, },
        { type: "coin", col: 1, row: 9, args: [2] },
        { type: "coin", col: 2, row: 9, },
        { type: "coin", col: 3, row: 9, },
        { type: "coin", col: 7, row: 9, },
        { type: "coin", col: 8, row: 9, },
        { type: "coin", col: 9, row: 9, args: [2] },
    ],
    GhostBase: { row: 6, col: 5 },
});

AllLevels.set(2, {
    lvlHeight: 13,
    lvlWidth: 13,
    WallMap: [ //          X
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1], //X
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    PacManStartingCoordinates: { row: 1, col: 6 },
    GhostToSpawnList: [
        { row: 10, col: 6, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.verticalManhattanPriority), speedratio: 0.9, image: "corleonne" },
        { row: 11, col: 6, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.horizontalManhattanPriority), speedratio: 0.9, image: "doyenne" },
    ],
    GhostBase: { row: 6, col: 6 },
    CollictablesToSpawnList: [
        { type: "coin", col: 1, row: 1, args: [2] },
        { type: "coin", col: 2, row: 1, },
        { type: "coin", col: 3, row: 1, },
        { type: "coin", col: 4, row: 1, },
        { type: "coin", col: 6, row: 1, },
        { type: "coin", col: 8, row: 1, },
        { type: "coin", col: 9, row: 1, },
        { type: "coin", col: 10, row: 1, },
        { type: "coin", col: 11, row: 1, args: [2] },
        { type: "coin", col: 1, row: 2, },
        { type: "coin", col: 4, row: 2, },
        { type: "coin", col: 6, row: 2, },
        { type: "coin", col: 8, row: 2, },
        { type: "coin", col: 11, row: 2, },
        { type: "coin", col: 1, row: 3, },
        { type: "coin", col: 3, row: 3, args: [2] },
        { type: "coin", col: 4, row: 3, },
        { type: "coin", col: 5, row: 3, },
        { type: "coin", col: 6, row: 3, },
        { type: "coin", col: 7, row: 3, },
        { type: "coin", col: 8, row: 3, },
        { type: "coin", col: 9, row: 3, args: [2] },
        { type: "coin", col: 11, row: 3, },
        { type: "coin", col: 1, row: 4, },
        { type: "coin", col: 2, row: 4, },
        { type: "coin", col: 3, row: 4, },
        { type: "coin", col: 9, row: 4, },
        { type: "coin", col: 10, row: 4, },
        { type: "coin", col: 11, row: 4, },
        { type: "coin", col: 1, row: 5, },
        { type: "coin", col: 3, row: 5, },
        { type: "coin", col: 4, row: 5, },
        { type: "coin", col: 5, row: 5, },
        { type: "coin", col: 6, row: 5, },
        { type: "coin", col: 7, row: 5, },
        { type: "coin", col: 8, row: 5, },
        { type: "coin", col: 9, row: 5, },
        { type: "coin", col: 11, row: 5, },
        { type: "beer", col: 1, row: 6, },
        { type: "coin", col: 4, row: 6, args: [2] },
        { type: "coin", col: 8, row: 6, args: [2] },
        { type: "beer", col: 11, row: 6, },
        { type: "coin", col: 1, row: 7, },
        { type: "coin", col: 3, row: 7, },
        { type: "coin", col: 4, row: 7, },
        { type: "coin", col: 5, row: 7, },
        { type: "coin", col: 6, row: 7, },
        { type: "coin", col: 7, row: 7, },
        { type: "coin", col: 8, row: 7, },
        { type: "coin", col: 9, row: 7, },
        { type: "coin", col: 11, row: 7, },
        { type: "coin", col: 1, row: 8, },
        { type: "coin", col: 2, row: 8, },
        { type: "coin", col: 3, row: 8, },
        { type: "coin", col: 9, row: 8, },
        { type: "coin", col: 10, row: 8, },
        { type: "coin", col: 11, row: 8, },
        { type: "coin", col: 1, row: 9, },
        { type: "coin", col: 3, row: 9, args: [2] },
        { type: "coin", col: 4, row: 9, },
        { type: "coin", col: 5, row: 9, },
        { type: "coin", col: 6, row: 9, },
        { type: "coin", col: 7, row: 9, },
        { type: "coin", col: 8, row: 9, },
        { type: "coin", col: 9, row: 9, args: [2] },
        { type: "coin", col: 11, row: 9, },
        { type: "coin", col: 1, row: 10, },
        { type: "coin", col: 4, row: 10, },
        { type: "coin", col: 6, row: 10, },
        { type: "coin", col: 8, row: 10, },
        { type: "coin", col: 11, row: 10, },
        { type: "coin", col: 1, row: 11, args: [2] },
        { type: "coin", col: 2, row: 11, },
        { type: "coin", col: 3, row: 11, },
        { type: "coin", col: 4, row: 11, },
        { type: "beer", col: 6, row: 11 },
        { type: "coin", col: 8, row: 11, },
        { type: "coin", col: 9, row: 11, },
        { type: "coin", col: 10, row: 11, },
        { type: "coin", col: 11, row: 11, args: [2] },
    ],
});

AllLevels.set(3, {
    "lvlHeight": 15,
    "lvlWidth": 15,
    "WallMap": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "CollictablesToSpawnList": [
        { "type": "beer", "row": 7, "col": 3 },
        { "type": "beer", "row": 7, "col": 11 },
        { "type": "coin", "row": 1, "col": 1, "args": [2] },
        { "type": "coin", "row": 1, "col": 2 },
        { "type": "coin", "row": 1, "col": 3 },
        { "type": "coin", "row": 1, "col": 4 },
        { "type": "coin", "row": 1, "col": 5 },
        { "type": "coin", "row": 1, "col": 6, "args": [2] },
        { "type": "coin", "row": 1, "col": 8, "args": [2] },
        { "type": "coin", "row": 1, "col": 9 },
        { "type": "coin", "row": 1, "col": 10 },
        { "type": "coin", "row": 1, "col": 11 },
        { "type": "coin", "row": 1, "col": 12 },
        { "type": "coin", "row": 1, "col": 13, "args": [2] },
        { "type": "coin", "row": 2, "col": 1 },
        { "type": "coin", "row": 2, "col": 4 },
        { "type": "coin", "row": 2, "col": 6 },
        { "type": "coin", "row": 2, "col": 8 },
        { "type": "coin", "row": 2, "col": 10 },
        { "type": "coin", "row": 2, "col": 13 },
        { "type": "coin", "row": 3, "col": 1 },
        { "type": "coin", "row": 3, "col": 3, "args": [2] },
        { "type": "coin", "row": 3, "col": 4, "args": [2] },
        { "type": "coin", "row": 3, "col": 6 },
        { "type": "coin", "row": 3, "col": 8 },
        { "type": "coin", "row": 3, "col": 10, "args": [2] },
        { "type": "coin", "row": 3, "col": 11, "args": [2] },
        { "type": "coin", "row": 3, "col": 13 },
        { "type": "coin", "row": 4, "col": 1 },
        { "type": "coin", "row": 4, "col": 3 },
        { "type": "coin", "row": 4, "col": 6 },
        { "type": "coin", "row": 4, "col": 7 },
        { "type": "coin", "row": 4, "col": 8 },
        { "type": "coin", "row": 4, "col": 11 },
        { "type": "coin", "row": 4, "col": 13 },
        { "type": "coin", "row": 5, "col": 1, "args": [2] },
        { "type": "coin", "row": 5, "col": 2 },
        { "type": "coin", "row": 5, "col": 3 },
        { "type": "coin", "row": 5, "col": 4 },
        { "type": "coin", "row": 5, "col": 5 },
        { "type": "coin", "row": 5, "col": 6, "args": [2] },
        { "type": "coin", "row": 5, "col": 8, "args": [2] },
        { "type": "coin", "row": 5, "col": 9 },
        { "type": "coin", "row": 5, "col": 10 },
        { "type": "coin", "row": 5, "col": 11 },
        { "type": "coin", "row": 5, "col": 12 },
        { "type": "coin", "row": 5, "col": 13 },
        { "type": "coin", "row": 6, "col": 2 },
        { "type": "coin", "row": 6, "col": 12 },
        { "type": "coin", "row": 7, "col": 2 },
        { "type": "coin", "row": 7, "col": 12 },
        { "type": "coin", "row": 8, "col": 2 },
        { "type": "coin", "row": 8, "col": 12 },
        { "type": "coin", "row": 9, "col": 1, "args": [2] },
        { "type": "coin", "row": 9, "col": 2 },
        { "type": "coin", "row": 9, "col": 3 },
        { "type": "coin", "row": 9, "col": 4 },
        { "type": "coin", "row": 9, "col": 5 },
        { "type": "coin", "row": 9, "col": 6, "args": [2] },
        { "type": "coin", "row": 9, "col": 8, "args": [2] },
        { "type": "coin", "row": 9, "col": 9 },
        { "type": "coin", "row": 9, "col": 10 },
        { "type": "coin", "row": 9, "col": 11 },
        { "type": "coin", "row": 9, "col": 12 },
        { "type": "coin", "row": 9, "col": 13, "args": [2] },
        { "type": "coin", "row": 10, "col": 1 },
        { "type": "coin", "row": 10, "col": 3 },
        { "type": "coin", "row": 10, "col": 6 },
        { "type": "coin", "row": 10, "col": 7 },
        { "type": "coin", "row": 10, "col": 8 },
        { "type": "coin", "row": 10, "col": 11 },
        { "type": "coin", "row": 10, "col": 13 },
        { "type": "coin", "row": 11, "col": 1 },
        { "type": "coin", "row": 11, "col": 3, "args": [2] },
        { "type": "coin", "row": 11, "col": 4, "args": [2] },
        { "type": "coin", "row": 11, "col": 6 },
        { "type": "coin", "row": 11, "col": 8 },
        { "type": "coin", "row": 11, "col": 10, "args": [2] },
        { "type": "coin", "row": 11, "col": 11, "args": [2] },
        { "type": "coin", "row": 11, "col": 13 },
        { "type": "coin", "row": 12, "col": 1 },
        { "type": "coin", "row": 12, "col": 4 },
        { "type": "coin", "row": 12, "col": 6 },
        { "type": "coin", "row": 12, "col": 8 },
        { "type": "coin", "row": 12, "col": 10 },
        { "type": "coin", "row": 12, "col": 13 },
        { "type": "coin", "row": 13, "col": 1, "args": [2] },
        { "type": "coin", "row": 13, "col": 2 },
        { "type": "coin", "row": 13, "col": 3 },
        { "type": "coin", "row": 13, "col": 4 },
        { "type": "coin", "row": 13, "col": 5 },
        { "type": "coin", "row": 13, "col": 6, "args": [2] },
        { "type": "coin", "row": 13, "col": 8, "args": [2] },
        { "type": "coin", "row": 13, "col": 9 },
        { "type": "coin", "row": 13, "col": 10 },
        { "type": "coin", "row": 13, "col": 11 },
        { "type": "coin", "row": 13, "col": 12 },
        { "type": "coin", "row": 13, "col": 13, "args": [2] }
    ],
    PacManStartingCoordinates: { row: 4, col: 7 },
    GhostToSpawnList: [
        { row: 6, col: 7, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.horizontalManhattanPriority), speedratio: 0.9, image: "corleonne" },
        { row: 8, col: 7, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.verticalManhattanPriority), speedratio: 0.9, image: "doyenne" },
    ],
    GhostBase: { row: 7, col: 7 },

});

AllLevels.set(4, {
    "lvlHeight": 17,
    "lvlWidth": 17,
    "WallMap": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    "PacManStartingCoordinates": { row: 8, col: 8 },
    GhostBase: { row: 8, col: 8 },
    GhostToSpawnList: [
        { row: 1, col: 8, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.horizontalManhattanPriority), speedratio: 0.95, image: "corleonne" },
        { row: 15, col: 8, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.verticalManhattanPriority), speedratio: 0.925, image: "doyenne" },
    ],
    "CollictablesToSpawnList": [
        { "type": "beer", "row": 4, "col": 3 },
        { "type": "beer", "row": 4, "col": 13 },
        { "type": "beer", "row": 12, "col": 3 },
        { "type": "beer", "row": 12, "col": 13 },
        { "type": "coin", "row": 1, "col": 1, args: [2] },
        { "type": "coin", "row": 1, "col": 2 },
        { "type": "coin", "row": 1, "col": 3, args: [2] },
        { "type": "coin", "row": 1, "col": 4 },
        { "type": "coin", "row": 1, "col": 5 },
        { "type": "coin", "row": 1, "col": 6, args: [2] },
        { "type": "coin", "row": 1, "col": 7 },
        { "type": "coin", "row": 1, "col": 8, args: [2] },
        { "type": "coin", "row": 1, "col": 9 },
        { "type": "coin", "row": 1, "col": 10, args: [2] },
        { "type": "coin", "row": 1, "col": 11 },
        { "type": "coin", "row": 1, "col": 12 },
        { "type": "coin", "row": 1, "col": 13, args: [2] },
        { "type": "coin", "row": 1, "col": 14 },
        { "type": "coin", "row": 1, "col": 15, args: [2] },
        { "type": "coin", "row": 2, "col": 1 },
        { "type": "coin", "row": 2, "col": 3 },
        { "type": "coin", "row": 2, "col": 6 },
        { "type": "coin", "row": 2, "col": 8 },
        { "type": "coin", "row": 2, "col": 10 },
        { "type": "coin", "row": 2, "col": 13 },
        { "type": "coin", "row": 2, "col": 15 },
        { "type": "coin", "row": 3, "col": 1 },
        { "type": "coin", "row": 3, "col": 3, args: [2] },
        { "type": "coin", "row": 3, "col": 4 },
        { "type": "coin", "row": 3, "col": 5 },
        { "type": "coin", "row": 3, "col": 6 },
        { "type": "coin", "row": 3, "col": 8 },
        { "type": "coin", "row": 3, "col": 10 },
        { "type": "coin", "row": 3, "col": 11 },
        { "type": "coin", "row": 3, "col": 12 },
        { "type": "coin", "row": 3, "col": 13, args: [2] },
        { "type": "coin", "row": 3, "col": 15 },
        { "type": "coin", "row": 4, "col": 1, args: [2] },
        { "type": "coin", "row": 4, "col": 2 },
        { "type": "coin", "row": 4, "col": 5 },
        { "type": "coin", "row": 4, "col": 6 },
        { "type": "coin", "row": 4, "col": 7 },
        { "type": "coin", "row": 4, "col": 8, args: [2] },
        { "type": "coin", "row": 4, "col": 9 },
        { "type": "coin", "row": 4, "col": 10 },
        { "type": "coin", "row": 4, "col": 11 },
        { "type": "coin", "row": 4, "col": 14 },
        { "type": "coin", "row": 4, "col": 15, args: [2] },
        { "type": "coin", "row": 5, "col": 1 },
        { "type": "coin", "row": 5, "col": 5 },
        { "type": "coin", "row": 5, "col": 11 },
        { "type": "coin", "row": 5, "col": 15 },
        { "type": "coin", "row": 6, "col": 1 },
        { "type": "coin", "row": 6, "col": 3, args: [2] },
        { "type": "coin", "row": 6, "col": 4 },
        { "type": "coin", "row": 6, "col": 5 },
        { "type": "coin", "row": 6, "col": 6 },
        { "type": "coin", "row": 6, "col": 7 },
        { "type": "coin", "row": 6, "col": 8, args: [2] },
        { "type": "coin", "row": 6, "col": 9 },
        { "type": "coin", "row": 6, "col": 10 },
        { "type": "coin", "row": 6, "col": 11 },
        { "type": "coin", "row": 6, "col": 12 },
        { "type": "coin", "row": 6, "col": 13, args: [2] },
        { "type": "coin", "row": 6, "col": 15 },
        { "type": "coin", "row": 7, "col": 1, args: [2] },
        { "type": "coin", "row": 7, "col": 2 },
        { "type": "coin", "row": 7, "col": 3 },
        { "type": "coin", "row": 7, "col": 5 },
        { "type": "coin", "row": 7, "col": 10 },
        { "type": "coin", "row": 7, "col": 13 },
        { "type": "coin", "row": 7, "col": 14 },
        { "type": "coin", "row": 7, "col": 15, args: [2] },
        { "type": "coin", "row": 8, "col": 3, args: [2] },
        { "type": "coin", "row": 8, "col": 5, args: [2] },
        { "type": "coin", "row": 8, "col": 6, args: [2] },
        { "type": "coin", "row": 8, "col": 10, args: [2] },
        { "type": "coin", "row": 8, "col": 11, args: [2] },
        { "type": "coin", "row": 8, "col": 13, args: [2] },
        { "type": "coin", "row": 9, "col": 1, args: [2] },
        { "type": "coin", "row": 9, "col": 2 },
        { "type": "coin", "row": 9, "col": 3 },
        { "type": "coin", "row": 9, "col": 6 },
        { "type": "coin", "row": 9, "col": 11 },
        { "type": "coin", "row": 9, "col": 13 },
        { "type": "coin", "row": 9, "col": 14 },
        { "type": "coin", "row": 9, "col": 15, args: [2] },
        { "type": "coin", "row": 10, "col": 1 },
        { "type": "coin", "row": 10, "col": 3, args: [2] },
        { "type": "coin", "row": 10, "col": 4 },
        { "type": "coin", "row": 10, "col": 5 },
        { "type": "coin", "row": 10, "col": 6 },
        { "type": "coin", "row": 10, "col": 7 },
        { "type": "coin", "row": 10, "col": 8, args: [2] },
        { "type": "coin", "row": 10, "col": 9 },
        { "type": "coin", "row": 10, "col": 10 },
        { "type": "coin", "row": 10, "col": 11 },
        { "type": "coin", "row": 10, "col": 12 },
        { "type": "coin", "row": 10, "col": 13, args: [2] },
        { "type": "coin", "row": 10, "col": 15 },
        { "type": "coin", "row": 11, "col": 1 },
        { "type": "coin", "row": 11, "col": 5 },
        { "type": "coin", "row": 11, "col": 11 },
        { "type": "coin", "row": 11, "col": 15 },
        { "type": "coin", "row": 12, "col": 1, args: [2] },
        { "type": "coin", "row": 12, "col": 2 },
        { "type": "coin", "row": 12, "col": 5 },
        { "type": "coin", "row": 12, "col": 6 },
        { "type": "coin", "row": 12, "col": 7 },
        { "type": "coin", "row": 12, "col": 8, args: [2] },
        { "type": "coin", "row": 12, "col": 9 },
        { "type": "coin", "row": 12, "col": 10 },
        { "type": "coin", "row": 12, "col": 11 },
        { "type": "coin", "row": 12, "col": 14 },
        { "type": "coin", "row": 12, "col": 15, args: [2] },
        { "type": "coin", "row": 13, "col": 1 },
        { "type": "coin", "row": 13, "col": 3, args: [2] },
        { "type": "coin", "row": 13, "col": 4 },
        { "type": "coin", "row": 13, "col": 5 },
        { "type": "coin", "row": 13, "col": 6 },
        { "type": "coin", "row": 13, "col": 8 },
        { "type": "coin", "row": 13, "col": 10 },
        { "type": "coin", "row": 13, "col": 11 },
        { "type": "coin", "row": 13, "col": 12 },
        { "type": "coin", "row": 13, "col": 13, args: [2] },
        { "type": "coin", "row": 13, "col": 15 },
        { "type": "coin", "row": 14, "col": 1 },
        { "type": "coin", "row": 14, "col": 3 },
        { "type": "coin", "row": 14, "col": 6 },
        { "type": "coin", "row": 14, "col": 8 },
        { "type": "coin", "row": 14, "col": 10 },
        { "type": "coin", "row": 14, "col": 13 },
        { "type": "coin", "row": 14, "col": 15 },
        { "type": "coin", "row": 15, "col": 1, args: [2] },
        { "type": "coin", "row": 15, "col": 2 },
        { "type": "coin", "row": 15, "col": 3, args: [2] },
        { "type": "coin", "row": 15, "col": 4 },
        { "type": "coin", "row": 15, "col": 5 },
        { "type": "coin", "row": 15, "col": 6, args: [2] },
        { "type": "coin", "row": 15, "col": 7 },
        { "type": "coin", "row": 15, "col": 8, args: [2] },
        { "type": "coin", "row": 15, "col": 9 },
        { "type": "coin", "row": 15, "col": 10, args: [2] },
        { "type": "coin", "row": 15, "col": 11 },
        { "type": "coin", "row": 15, "col": 12 },
        { "type": "coin", "row": 15, "col": 13, args: [2] },
        { "type": "coin", "row": 15, "col": 14 },
        { "type": "coin", "row": 15, "col": 15, args: [2] }
    ]
})

AllLevels.set(5, {
    lvlHeight: 19,
    lvlWidth: 19,
    WallMap: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    PacManStartingCoordinates: { row: 9, col: 9 },
    GhostBase: { row: 9, col: 9 },
    GhostToSpawnList: [
        { row: 1, col: 1, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.horizontalManhattanPriority), speedratio: 0.9, image: "corleonne" },
        { row: 1, col: 17, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.verticalManhattanPriority), speedratio: 0.9, image: "doyenne" },
        { row: 17, col: 17, pathfindingStrategy: new AStarPathfindingStrategy(), speedratio: 0.9, image: "corleonne" },
        { row: 17, col: 1, pathfindingStrategy: new DirectPathfindingStrategy(), speedratio: 0.9, image: "doyenne" },
    ],
    "CollictablesToSpawnList": [
        { "type": "beer", "row": 3, "col": 9 },
        { "type": "beer", "row": 9, "col": 3 },
        { "type": "beer", "row": 9, "col": 15 },
        { "type": "beer", "row": 15, "col": 9 },
        { "type": "coin", "row": 1, "col": 1, args: [2] },
        { "type": "coin", "row": 1, "col": 2 },
        { "type": "coin", "row": 1, "col": 3 },
        { "type": "coin", "row": 1, "col": 4, args: [2] },
        { "type": "coin", "row": 1, "col": 5 },
        { "type": "coin", "row": 1, "col": 6 },
        { "type": "coin", "row": 1, "col": 7 },
        { "type": "coin", "row": 1, "col": 8, args: [2] },
        { "type": "coin", "row": 1, "col": 10, args: [2] },
        { "type": "coin", "row": 1, "col": 11 },
        { "type": "coin", "row": 1, "col": 12 },
        { "type": "coin", "row": 1, "col": 13 },
        { "type": "coin", "row": 1, "col": 14, args: [2] },
        { "type": "coin", "row": 1, "col": 15 },
        { "type": "coin", "row": 1, "col": 16 },
        { "type": "coin", "row": 1, "col": 17, args: [2] },
        { "type": "coin", "row": 2, "col": 1 },
        { "type": "coin", "row": 2, "col": 4 },
        { "type": "coin", "row": 2, "col": 8 },
        { "type": "coin", "row": 2, "col": 10 },
        { "type": "coin", "row": 2, "col": 14 },
        { "type": "coin", "row": 2, "col": 17 },
        { "type": "coin", "row": 3, "col": 1 },
        { "type": "coin", "row": 3, "col": 3, args: [2] },
        { "type": "coin", "row": 3, "col": 4 },
        { "type": "coin", "row": 3, "col": 5 },
        { "type": "coin", "row": 3, "col": 6, args: [2] },
        { "type": "coin", "row": 3, "col": 8 },
        { "type": "coin", "row": 3, "col": 10 },
        { "type": "coin", "row": 3, "col": 12, args: [2] },
        { "type": "coin", "row": 3, "col": 13 },
        { "type": "coin", "row": 3, "col": 14 },
        { "type": "coin", "row": 3, "col": 15, args: [2] },
        { "type": "coin", "row": 3, "col": 17 },
        { "type": "coin", "row": 4, "col": 1, args: [2] },
        { "type": "coin", "row": 4, "col": 2 },
        { "type": "coin", "row": 4, "col": 3 },
        { "type": "coin", "row": 4, "col": 6 },
        { "type": "coin", "row": 4, "col": 8 },
        { "type": "coin", "row": 4, "col": 10 },
        { "type": "coin", "row": 4, "col": 12 },
        { "type": "coin", "row": 4, "col": 15 },
        { "type": "coin", "row": 4, "col": 16 },
        { "type": "coin", "row": 4, "col": 17, args: [2] },
        { "type": "coin", "row": 5, "col": 1 },
        { "type": "coin", "row": 5, "col": 3 },
        { "type": "coin", "row": 5, "col": 5, args: [2] },
        { "type": "coin", "row": 5, "col": 6 },
        { "type": "coin", "row": 5, "col": 7 },
        { "type": "coin", "row": 5, "col": 8, args: [2] },
        { "type": "coin", "row": 5, "col": 10, args: [2] },
        { "type": "coin", "row": 5, "col": 11 },
        { "type": "coin", "row": 5, "col": 12 },
        { "type": "coin", "row": 5, "col": 13, args: [2] },
        { "type": "coin", "row": 5, "col": 15 },
        { "type": "coin", "row": 5, "col": 17 },
        { "type": "coin", "row": 6, "col": 1 },
        { "type": "coin", "row": 6, "col": 3, args: [2] },
        { "type": "coin", "row": 6, "col": 4 },
        { "type": "coin", "row": 6, "col": 5 },
        { "type": "coin", "row": 6, "col": 7 },
        { "type": "coin", "row": 6, "col": 11 },
        { "type": "coin", "row": 6, "col": 13 },
        { "type": "coin", "row": 6, "col": 14 },
        { "type": "coin", "row": 6, "col": 15, args: [2] },
        { "type": "coin", "row": 6, "col": 17 },
        { "type": "coin", "row": 7, "col": 1 },
        { "type": "coin", "row": 7, "col": 5 },
        { "type": "coin", "row": 7, "col": 6 },
        { "type": "coin", "row": 7, "col": 7, args: [2] },
        { "type": "coin", "row": 7, "col": 8 },
        { "type": "coin", "row": 7, "col": 9, args: [2] },
        { "type": "coin", "row": 7, "col": 10 },
        { "type": "coin", "row": 7, "col": 11, args: [2] },
        { "type": "coin", "row": 7, "col": 12 },
        { "type": "coin", "row": 7, "col": 13 },
        { "type": "coin", "row": 7, "col": 17 },
        { "type": "coin", "row": 8, "col": 1, args: [2] },
        { "type": "coin", "row": 8, "col": 2 },
        { "type": "coin", "row": 8, "col": 3 },
        { "type": "coin", "row": 8, "col": 4 },
        { "type": "coin", "row": 8, "col": 5, args: [2] },
        { "type": "coin", "row": 8, "col": 7 },
        { "type": "coin", "row": 8, "col": 11 },
        { "type": "coin", "row": 8, "col": 13, args: [2] },
        { "type": "coin", "row": 8, "col": 14 },
        { "type": "coin", "row": 8, "col": 15 },
        { "type": "coin", "row": 8, "col": 16 },
        { "type": "coin", "row": 8, "col": 17, args: [2] },
        { "type": "coin", "row": 9, "col": 7, args: [2] },
        { "type": "coin", "row": 9, "col": 11, args: [2] },
        { "type": "coin", "row": 10, "col": 1, args: [2] },
        { "type": "coin", "row": 10, "col": 2 },
        { "type": "coin", "row": 10, "col": 3 },
        { "type": "coin", "row": 10, "col": 4 },
        { "type": "coin", "row": 10, "col": 5, args: [2] },
        { "type": "coin", "row": 10, "col": 7 },
        { "type": "coin", "row": 10, "col": 11 },
        { "type": "coin", "row": 10, "col": 13, args: [2] },
        { "type": "coin", "row": 10, "col": 14 },
        { "type": "coin", "row": 10, "col": 15 },
        { "type": "coin", "row": 10, "col": 16 },
        { "type": "coin", "row": 10, "col": 17, args: [2] },
        { "type": "coin", "row": 11, "col": 1 },
        { "type": "coin", "row": 11, "col": 5 },
        { "type": "coin", "row": 11, "col": 6 },
        { "type": "coin", "row": 11, "col": 7, args: [2] },
        { "type": "coin", "row": 11, "col": 8 },
        { "type": "coin", "row": 11, "col": 9, args: [2] },
        { "type": "coin", "row": 11, "col": 10 },
        { "type": "coin", "row": 11, "col": 11, args: [2] },
        { "type": "coin", "row": 11, "col": 12 },
        { "type": "coin", "row": 11, "col": 13 },
        { "type": "coin", "row": 11, "col": 17 },
        { "type": "coin", "row": 12, "col": 1 },
        { "type": "coin", "row": 12, "col": 3, args: [2] },
        { "type": "coin", "row": 12, "col": 4 },
        { "type": "coin", "row": 12, "col": 5 },
        { "type": "coin", "row": 12, "col": 7 },
        { "type": "coin", "row": 12, "col": 11 },
        { "type": "coin", "row": 12, "col": 13 },
        { "type": "coin", "row": 12, "col": 14 },
        { "type": "coin", "row": 12, "col": 15, args: [2] },
        { "type": "coin", "row": 12, "col": 17 },
        { "type": "coin", "row": 13, "col": 1 },
        { "type": "coin", "row": 13, "col": 3 },
        { "type": "coin", "row": 13, "col": 5, args: [2] },
        { "type": "coin", "row": 13, "col": 6 },
        { "type": "coin", "row": 13, "col": 7 },
        { "type": "coin", "row": 13, "col": 8, args: [2] },
        { "type": "coin", "row": 13, "col": 10, args: [2] },
        { "type": "coin", "row": 13, "col": 11 },
        { "type": "coin", "row": 13, "col": 12 },
        { "type": "coin", "row": 13, "col": 13, args: [2] },
        { "type": "coin", "row": 13, "col": 15 },
        { "type": "coin", "row": 13, "col": 17 },
        { "type": "coin", "row": 14, "col": 1, args: [2] },
        { "type": "coin", "row": 14, "col": 2 },
        { "type": "coin", "row": 14, "col": 3 },
        { "type": "coin", "row": 14, "col": 6 },
        { "type": "coin", "row": 14, "col": 8 },
        { "type": "coin", "row": 14, "col": 10 },
        { "type": "coin", "row": 14, "col": 12 },
        { "type": "coin", "row": 14, "col": 15 },
        { "type": "coin", "row": 14, "col": 16 },
        { "type": "coin", "row": 14, "col": 17, args: [2] },
        { "type": "coin", "row": 15, "col": 1 },
        { "type": "coin", "row": 15, "col": 3, args: [2] },
        { "type": "coin", "row": 15, "col": 4 },
        { "type": "coin", "row": 15, "col": 5 },
        { "type": "coin", "row": 15, "col": 6, args: [2] },
        { "type": "coin", "row": 15, "col": 8 },
        { "type": "coin", "row": 15, "col": 10 },
        { "type": "coin", "row": 15, "col": 12, args: [2] },
        { "type": "coin", "row": 15, "col": 13 },
        { "type": "coin", "row": 15, "col": 14 },
        { "type": "coin", "row": 15, "col": 15, args: [2] },
        { "type": "coin", "row": 15, "col": 17 },
        { "type": "coin", "row": 16, "col": 1 },
        { "type": "coin", "row": 16, "col": 4 },
        { "type": "coin", "row": 16, "col": 8 },
        { "type": "coin", "row": 16, "col": 10 },
        { "type": "coin", "row": 16, "col": 14 },
        { "type": "coin", "row": 16, "col": 17 },
        { "type": "coin", "row": 17, "col": 1, args: [2] },
        { "type": "coin", "row": 17, "col": 2 },
        { "type": "coin", "row": 17, "col": 3 },
        { "type": "coin", "row": 17, "col": 4, args: [2] },
        { "type": "coin", "row": 17, "col": 5 },
        { "type": "coin", "row": 17, "col": 6 },
        { "type": "coin", "row": 17, "col": 7 },
        { "type": "coin", "row": 17, "col": 8, args: [2] },
        { "type": "coin", "row": 17, "col": 10, args: [2] },
        { "type": "coin", "row": 17, "col": 11 },
        { "type": "coin", "row": 17, "col": 12 },
        { "type": "coin", "row": 17, "col": 13 },
        { "type": "coin", "row": 17, "col": 14, args: [2] },
        { "type": "coin", "row": 17, "col": 15 },
        { "type": "coin", "row": 17, "col": 16 },
        { "type": "coin", "row": 17, "col": 17, args: [2] }
    ]
})

AllLevels.set(6, {
    "lvlHeight": 21,
    "lvlWidth": 21,
    "WallMap": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    PacManStartingCoordinates: { row: 10, col: 10 },
    GhostBase: { row: 10, col: 10 },
    GhostToSpawnList: [
        { row: 1, col: 1, pathfindingStrategy: new DirectPathfindingStrategy(), speedratio: 1, image: "corleonne" },
        { row: 1, col: 19, pathfindingStrategy: new DirectPathfindingStrategy(), speedratio: 1, image: "doyenne" },
        { row: 19, col: 19, pathfindingStrategy: new DirectPathfindingStrategy(), speedratio: 1, image: "corleonne" },
        { row: 19, col: 1, pathfindingStrategy: new DirectPathfindingStrategy(), speedratio: 1, image: "doyenne" },
    ],
    "CollictablesToSpawnList": [
        {
            "type": "coin",
            "row": 1,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 2
        },
        {
            "type": "coin",
            "row": 1,
            "col": 3
        },
        {
            "type": "coin",
            "row": 1,
            "col": 4,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 5
        },
        {
            "type": "coin",
            "row": 1,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 8
        },
        {
            "type": "beer",
            "row": 1,
            "col": 9
        },
        {
            "type": "coin",
            "row": 1,
            "col": 10
        },
        {
            "type": "coin",
            "row": 1,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 13
        },
        {
            "type": "coin",
            "row": 1,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 15
        },
        {
            "type": "coin",
            "row": 1,
            "col": 16
        },
        {
            "type": "coin",
            "row": 1,
            "col": 17
        },
        {
            "type": "coin",
            "row": 1,
            "col": 18
        },
        {
            "type": "coin",
            "row": 1,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 2,
            "col": 1
        },
        {
            "type": "coin",
            "row": 2,
            "col": 4
        },
        {
            "type": "coin",
            "row": 2,
            "col": 6
        },
        {
            "type": "coin",
            "row": 2,
            "col": 8
        },
        {
            "type": "coin",
            "row": 2,
            "col": 10
        },
        {
            "type": "coin",
            "row": 2,
            "col": 12
        },
        {
            "type": "coin",
            "row": 2,
            "col": 14
        },
        {
            "type": "coin",
            "row": 2,
            "col": 19
        },
        {
            "type": "coin",
            "row": 3,
            "col": 1
        },
        {
            "type": "coin",
            "row": 3,
            "col": 3
        },
        {
            "type": "coin",
            "row": 3,
            "col": 4
        },
        {
            "type": "coin",
            "row": 3,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 7
        },
        {
            "type": "coin",
            "row": 3,
            "col": 8
        },
        {
            "type": "coin",
            "row": 3,
            "col": 10
        },
        {
            "type": "coin",
            "row": 3,
            "col": 11
        },
        {
            "type": "coin",
            "row": 3,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 14
        },
        {
            "type": "coin",
            "row": 3,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 16
        },
        {
            "type": "coin",
            "row": 3,
            "col": 17
        },
        {
            "type": "coin",
            "row": 3,
            "col": 19
        },
        {
            "type": "coin",
            "row": 4,
            "col": 1
        },
        {
            "type": "coin",
            "row": 4,
            "col": 3
        },
        {
            "type": "coin",
            "row": 4,
            "col": 6
        },
        {
            "type": "coin",
            "row": 4,
            "col": 12
        },
        {
            "type": "coin",
            "row": 4,
            "col": 15
        },
        {
            "type": "coin",
            "row": 4,
            "col": 17
        },
        {
            "type": "coin",
            "row": 4,
            "col": 18
        },
        {
            "type": "coin",
            "row": 4,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 1
        },
        {
            "type": "coin",
            "row": 5,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 4
        },
        {
            "type": "coin",
            "row": 5,
            "col": 5
        },
        {
            "type": "coin",
            "row": 5,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 7
        },
        {
            "type": "coin",
            "row": 5,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 9
        },
        {
            "type": "coin",
            "row": 5,
            "col": 10,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 11
        },
        {
            "type": "coin",
            "row": 5,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 13
        },
        {
            "type": "coin",
            "row": 5,
            "col": 15
        },
        {
            "type": "coin",
            "row": 5,
            "col": 19
        },
        {
            "type": "coin",
            "row": 6,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 6,
            "col": 2
        },
        {
            "type": "coin",
            "row": 6,
            "col": 3
        },
        {
            "type": "coin",
            "row": 6,
            "col": 6
        },
        {
            "type": "coin",
            "row": 6,
            "col": 8
        },
        {
            "type": "coin",
            "row": 6,
            "col": 10
        },
        {
            "type": "coin",
            "row": 6,
            "col": 13
        },
        {
            "type": "coin",
            "row": 6,
            "col": 14
        },
        {
            "type": "coin",
            "row": 6,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 6,
            "col": 16
        },
        {
            "type": "coin",
            "row": 6,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 6,
            "col": 18
        },
        {
            "type": "coin",
            "row": 6,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 1
        },
        {
            "type": "coin",
            "row": 7,
            "col": 5
        },
        {
            "type": "coin",
            "row": 7,
            "col": 6
        },
        {
            "type": "coin",
            "row": 7,
            "col": 8
        },
        {
            "type": "coin",
            "row": 7,
            "col": 10
        },
        {
            "type": "coin",
            "row": 7,
            "col": 15
        },
        {
            "type": "coin",
            "row": 7,
            "col": 17
        },
        {
            "type": "coin",
            "row": 8,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 2
        },
        {
            "type": "coin",
            "row": 8,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 4
        },
        {
            "type": "coin",
            "row": 8,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 9
        },
        {
            "type": "coin",
            "row": 8,
            "col": 10,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 13
        },
        {
            "type": "coin",
            "row": 8,
            "col": 14
        },
        {
            "type": "coin",
            "row": 8,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 17
        },
        {
            "type": "coin",
            "row": 8,
            "col": 18
        },
        {
            "type": "coin",
            "row": 8,
            "col": 19
        },
        {
            "type": "coin",
            "row": 9,
            "col": 3
        },
        {
            "type": "coin",
            "row": 9,
            "col": 5
        },
        {
            "type": "coin",
            "row": 9,
            "col": 12
        },
        {
            "type": "coin",
            "row": 9,
            "col": 15
        },
        {
            "type": "beer",
            "row": 9,
            "col": 19
        },
        {
            "type": "coin",
            "row": 10,
            "col": 1
        },
        {
            "type": "coin",
            "row": 10,
            "col": 2
        },
        {
            "type": "coin",
            "row": 10,
            "col": 3
        },
        {
            "type": "coin",
            "row": 10,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 6
        },
        {
            "type": "coin",
            "row": 10,
            "col": 7
        },
        {
            "type": "coin",
            "row": 10,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 13
        },
        {
            "type": "coin",
            "row": 10,
            "col": 14
        },
        {
            "type": "coin",
            "row": 10,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 17
        },
        {
            "type": "coin",
            "row": 10,
            "col": 18
        },
        {
            "type": "coin",
            "row": 10,
            "col": 19
        },
        {
            "type": "beer",
            "row": 11,
            "col": 1
        },
        {
            "type": "coin",
            "row": 11,
            "col": 5
        },
        {
            "type": "coin",
            "row": 11,
            "col": 8
        },
        {
            "type": "coin",
            "row": 11,
            "col": 15
        },
        {
            "type": "coin",
            "row": 11,
            "col": 17
        },
        {
            "type": "coin",
            "row": 12,
            "col": 1
        },
        {
            "type": "coin",
            "row": 12,
            "col": 2
        },
        {
            "type": "coin",
            "row": 12,
            "col": 3
        },
        {
            "type": "coin",
            "row": 12,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 6
        },
        {
            "type": "coin",
            "row": 12,
            "col": 7
        },
        {
            "type": "coin",
            "row": 12,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 10,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 11
        },
        {
            "type": "coin",
            "row": 12,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 16
        },
        {
            "type": "coin",
            "row": 12,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 18
        },
        {
            "type": "coin",
            "row": 12,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 3
        },
        {
            "type": "coin",
            "row": 13,
            "col": 5
        },
        {
            "type": "coin",
            "row": 13,
            "col": 10
        },
        {
            "type": "coin",
            "row": 13,
            "col": 12
        },
        {
            "type": "coin",
            "row": 13,
            "col": 14
        },
        {
            "type": "coin",
            "row": 13,
            "col": 15
        },
        {
            "type": "coin",
            "row": 13,
            "col": 19
        },
        {
            "type": "coin",
            "row": 14,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 14,
            "col": 2
        },
        {
            "type": "coin",
            "row": 14,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 14,
            "col": 4
        },
        {
            "type": "coin",
            "row": 14,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 14,
            "col": 6
        },
        {
            "type": "coin",
            "row": 14,
            "col": 7
        },
        {
            "type": "coin",
            "row": 14,
            "col": 10
        },
        {
            "type": "coin",
            "row": 14,
            "col": 12
        },
        {
            "type": "coin",
            "row": 14,
            "col": 14
        },
        {
            "type": "coin",
            "row": 14,
            "col": 17
        },
        {
            "type": "coin",
            "row": 14,
            "col": 18
        },
        {
            "type": "coin",
            "row": 14,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 1
        },
        {
            "type": "coin",
            "row": 15,
            "col": 5
        },
        {
            "type": "coin",
            "row": 15,
            "col": 7
        },
        {
            "type": "coin",
            "row": 15,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 9
        },
        {
            "type": "coin",
            "row": 15,
            "col": 10,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 11
        },
        {
            "type": "coin",
            "row": 15,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 13
        },
        {
            "type": "coin",
            "row": 15,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 15
        },
        {
            "type": "coin",
            "row": 15,
            "col": 16
        },
        {
            "type": "coin",
            "row": 15,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 19
        },
        {
            "type": "coin",
            "row": 16,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 16,
            "col": 2
        },
        {
            "type": "coin",
            "row": 16,
            "col": 3
        },
        {
            "type": "coin",
            "row": 16,
            "col": 5
        },
        {
            "type": "coin",
            "row": 16,
            "col": 8
        },
        {
            "type": "coin",
            "row": 16,
            "col": 14
        },
        {
            "type": "coin",
            "row": 16,
            "col": 17
        },
        {
            "type": "coin",
            "row": 16,
            "col": 19
        },
        {
            "type": "coin",
            "row": 17,
            "col": 1
        },
        {
            "type": "coin",
            "row": 17,
            "col": 3
        },
        {
            "type": "coin",
            "row": 17,
            "col": 4
        },
        {
            "type": "coin",
            "row": 17,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 6
        },
        {
            "type": "coin",
            "row": 17,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 9
        },
        {
            "type": "coin",
            "row": 17,
            "col": 10
        },
        {
            "type": "coin",
            "row": 17,
            "col": 12
        },
        {
            "type": "coin",
            "row": 17,
            "col": 13
        },
        {
            "type": "coin",
            "row": 17,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 16
        },
        {
            "type": "coin",
            "row": 17,
            "col": 17
        },
        {
            "type": "coin",
            "row": 17,
            "col": 19
        },
        {
            "type": "coin",
            "row": 18,
            "col": 1
        },
        {
            "type": "coin",
            "row": 18,
            "col": 6
        },
        {
            "type": "coin",
            "row": 18,
            "col": 8
        },
        {
            "type": "coin",
            "row": 18,
            "col": 10
        },
        {
            "type": "coin",
            "row": 18,
            "col": 12
        },
        {
            "type": "coin",
            "row": 18,
            "col": 14
        },
        {
            "type": "coin",
            "row": 18,
            "col": 16
        },
        {
            "type": "coin",
            "row": 18,
            "col": 19
        },
        {
            "type": "coin",
            "row": 19,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 2
        },
        {
            "type": "coin",
            "row": 19,
            "col": 3
        },
        {
            "type": "coin",
            "row": 19,
            "col": 4
        },
        {
            "type": "coin",
            "row": 19,
            "col": 5
        },
        {
            "type": "coin",
            "row": 19,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 7
        },
        {
            "type": "coin",
            "row": 19,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 10
        },
        {
            "type": "beer",
            "row": 19,
            "col": 11
        },
        {
            "type": "coin",
            "row": 19,
            "col": 12
        },
        {
            "type": "coin",
            "row": 19,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 15
        },
        {
            "type": "coin",
            "row": 19,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 17
        },
        {
            "type": "coin",
            "row": 19,
            "col": 18
        },
        {
            "type": "coin",
            "row": 19,
            "col": 19,
            "args": [
                2
            ]
        }
    ]
})

AllLevels.set(7, {
    "lvlHeight": 23,
    "lvlWidth": 23,
    "WallMap": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    GhostBase: { row: 9, col: 11 },
    PacManStartingCoordinates: { row: 9, col: 11 },
    GhostToSpawnList: [
        { row: 1, col: 1, pathfindingStrategy: new DirectPathfindingStrategy(), speedratio: 1, image: "corleonne" },
        { row: 1, col: 21, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.horizontalManhattanPriority), speedratio: 1, image: "doyenne" },
        { row: 21, col: 21, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.verticalManhattanPriority), speedratio: 1, image: "corleonne" },
        { row: 21, col: 1, pathfindingStrategy: new DirectPathfindingStrategy(), speedratio: 1, image: "doyenne" },
    ],
    "CollictablesToSpawnList": [
        {
            "type": "coin",
            "row": 1,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 2
        },
        {
            "type": "coin",
            "row": 1,
            "col": 3
        },
        {
            "type": "coin",
            "row": 1,
            "col": 4,
            "args": [
                2
            ]
        },
        {
            "type": "beer",
            "row": 1,
            "col": 5
        },
        {
            "type": "coin",
            "row": 1,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 8
        },
        {
            "type": "coin",
            "row": 1,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 10
        },
        {
            "type": "coin",
            "row": 1,
            "col": 11,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 12
        },
        {
            "type": "coin",
            "row": 1,
            "col": 13,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 14
        },
        {
            "type": "coin",
            "row": 1,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "beer",
            "row": 1,
            "col": 17
        },
        {
            "type": "coin",
            "row": 1,
            "col": 18,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 19
        },
        {
            "type": "coin",
            "row": 1,
            "col": 20
        },
        {
            "type": "coin",
            "row": 1,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 2,
            "col": 1
        },
        {
            "type": "coin",
            "row": 2,
            "col": 4
        },
        {
            "type": "coin",
            "row": 2,
            "col": 7
        },
        {
            "type": "coin",
            "row": 2,
            "col": 9
        },
        {
            "type": "coin",
            "row": 2,
            "col": 13
        },
        {
            "type": "coin",
            "row": 2,
            "col": 15
        },
        {
            "type": "coin",
            "row": 2,
            "col": 18
        },
        {
            "type": "coin",
            "row": 2,
            "col": 21
        },
        {
            "type": "coin",
            "row": 3,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 4,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 7
        },
        {
            "type": "coin",
            "row": 3,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 10
        },
        {
            "type": "coin",
            "row": 3,
            "col": 11,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 12
        },
        {
            "type": "coin",
            "row": 3,
            "col": 13,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 15
        },
        {
            "type": "coin",
            "row": 3,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 18,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 4,
            "col": 1
        },
        {
            "type": "coin",
            "row": 4,
            "col": 3
        },
        {
            "type": "coin",
            "row": 4,
            "col": 5
        },
        {
            "type": "coin",
            "row": 4,
            "col": 7
        },
        {
            "type": "coin",
            "row": 4,
            "col": 11
        },
        {
            "type": "coin",
            "row": 4,
            "col": 15
        },
        {
            "type": "coin",
            "row": 4,
            "col": 17
        },
        {
            "type": "coin",
            "row": 4,
            "col": 19
        },
        {
            "type": "coin",
            "row": 4,
            "col": 21
        },
        {
            "type": "coin",
            "row": 5,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 2
        },
        {
            "type": "coin",
            "row": 5,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 5
        },
        {
            "type": "coin",
            "row": 5,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 7
        },
        {
            "type": "coin",
            "row": 5,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 9
        },
        {
            "type": "coin",
            "row": 5,
            "col": 10
        },
        {
            "type": "coin",
            "row": 5,
            "col": 11,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 12
        },
        {
            "type": "coin",
            "row": 5,
            "col": 13
        },
        {
            "type": "coin",
            "row": 5,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 15
        },
        {
            "type": "coin",
            "row": 5,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 17
        },
        {
            "type": "coin",
            "row": 5,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 20
        },
        {
            "type": "coin",
            "row": 5,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 6,
            "col": 6
        },
        {
            "type": "coin",
            "row": 6,
            "col": 8
        },
        {
            "type": "coin",
            "row": 6,
            "col": 14
        },
        {
            "type": "coin",
            "row": 6,
            "col": 16
        },
        {
            "type": "coin",
            "row": 7,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 2
        },
        {
            "type": "coin",
            "row": 7,
            "col": 3
        },
        {
            "type": "coin",
            "row": 7,
            "col": 4
        },
        {
            "type": "coin",
            "row": 7,
            "col": 5
        },
        {
            "type": "coin",
            "row": 7,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 9
        },
        {
            "type": "coin",
            "row": 7,
            "col": 10
        },
        {
            "type": "coin",
            "row": 7,
            "col": 11
        },
        {
            "type": "coin",
            "row": 7,
            "col": 12
        },
        {
            "type": "coin",
            "row": 7,
            "col": 13
        },
        {
            "type": "coin",
            "row": 7,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 17
        },
        {
            "type": "coin",
            "row": 7,
            "col": 18
        },
        {
            "type": "coin",
            "row": 7,
            "col": 19
        },
        {
            "type": "coin",
            "row": 7,
            "col": 20
        },
        {
            "type": "coin",
            "row": 7,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 1
        },
        {
            "type": "coin",
            "row": 8,
            "col": 8
        },
        {
            "type": "coin",
            "row": 8,
            "col": 14
        },
        {
            "type": "coin",
            "row": 8,
            "col": 21
        },
        {
            "type": "coin",
            "row": 9,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 2
        },
        {
            "type": "coin",
            "row": 9,
            "col": 3
        },
        {
            "type": "coin",
            "row": 9,
            "col": 4
        },
        {
            "type": "coin",
            "row": 9,
            "col": 6
        },
        {
            "type": "coin",
            "row": 9,
            "col": 7
        },
        {
            "type": "coin",
            "row": 9,
            "col": 8
        },
        {
            "type": "coin",
            "row": 9,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 13,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 14
        },
        {
            "type": "coin",
            "row": 9,
            "col": 15
        },
        {
            "type": "coin",
            "row": 9,
            "col": 16
        },
        {
            "type": "coin",
            "row": 9,
            "col": 18
        },
        {
            "type": "coin",
            "row": 9,
            "col": 19
        },
        {
            "type": "coin",
            "row": 9,
            "col": 20
        },
        {
            "type": "coin",
            "row": 9,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 1
        },
        {
            "type": "coin",
            "row": 10,
            "col": 4
        },
        {
            "type": "coin",
            "row": 10,
            "col": 5
        },
        {
            "type": "coin",
            "row": 10,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 9
        },
        {
            "type": "coin",
            "row": 10,
            "col": 13
        },
        {
            "type": "coin",
            "row": 10,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 17
        },
        {
            "type": "coin",
            "row": 10,
            "col": 18
        },
        {
            "type": "coin",
            "row": 10,
            "col": 21
        },
        {
            "type": "coin",
            "row": 11,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 11,
            "col": 2,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 11,
            "col": 6
        },
        {
            "type": "coin",
            "row": 11,
            "col": 7
        },
        {
            "type": "coin",
            "row": 11,
            "col": 8
        },
        {
            "type": "coin",
            "row": 11,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "beer",
            "row": 11,
            "col": 11
        },
        {
            "type": "coin",
            "row": 11,
            "col": 13,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 11,
            "col": 14
        },
        {
            "type": "coin",
            "row": 11,
            "col": 15
        },
        {
            "type": "coin",
            "row": 11,
            "col": 16
        },
        {
            "type": "coin",
            "row": 11,
            "col": 20,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 11,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 2,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 3
        },
        {
            "type": "coin",
            "row": 12,
            "col": 4,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 5
        },
        {
            "type": "coin",
            "row": 12,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 8
        },
        {
            "type": "coin",
            "row": 12,
            "col": 11
        },
        {
            "type": "coin",
            "row": 12,
            "col": 14
        },
        {
            "type": "coin",
            "row": 12,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 17
        },
        {
            "type": "coin",
            "row": 12,
            "col": 18,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 19
        },
        {
            "type": "coin",
            "row": 12,
            "col": 20,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 2,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 4
        },
        {
            "type": "coin",
            "row": 13,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 9
        },
        {
            "type": "coin",
            "row": 13,
            "col": 10
        },
        {
            "type": "coin",
            "row": 13,
            "col": 11,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 12
        },
        {
            "type": "coin",
            "row": 13,
            "col": 13
        },
        {
            "type": "coin",
            "row": 13,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 18
        },
        {
            "type": "coin",
            "row": 13,
            "col": 20,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 14,
            "col": 1
        },
        {
            "type": "coin",
            "row": 14,
            "col": 4
        },
        {
            "type": "coin",
            "row": 14,
            "col": 6
        },
        {
            "type": "coin",
            "row": 14,
            "col": 7
        },
        {
            "type": "coin",
            "row": 14,
            "col": 8
        },
        {
            "type": "coin",
            "row": 14,
            "col": 11
        },
        {
            "type": "coin",
            "row": 14,
            "col": 14
        },
        {
            "type": "coin",
            "row": 14,
            "col": 15
        },
        {
            "type": "coin",
            "row": 14,
            "col": 16
        },
        {
            "type": "coin",
            "row": 14,
            "col": 18
        },
        {
            "type": "coin",
            "row": 14,
            "col": 21
        },
        {
            "type": "coin",
            "row": 15,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 2
        },
        {
            "type": "coin",
            "row": 15,
            "col": 3
        },
        {
            "type": "coin",
            "row": 15,
            "col": 4,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 5
        },
        {
            "type": "coin",
            "row": 15,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 8
        },
        {
            "type": "coin",
            "row": 15,
            "col": 9
        },
        {
            "type": "beer",
            "row": 15,
            "col": 11
        },
        {
            "type": "coin",
            "row": 15,
            "col": 13
        },
        {
            "type": "coin",
            "row": 15,
            "col": 14
        },
        {
            "type": "coin",
            "row": 15,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 17
        },
        {
            "type": "coin",
            "row": 15,
            "col": 18,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 19
        },
        {
            "type": "coin",
            "row": 15,
            "col": 20
        },
        {
            "type": "coin",
            "row": 15,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 16,
            "col": 6
        },
        {
            "type": "coin",
            "row": 16,
            "col": 9
        },
        {
            "type": "coin",
            "row": 16,
            "col": 13
        },
        {
            "type": "coin",
            "row": 16,
            "col": 16
        },
        {
            "type": "coin",
            "row": 17,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 2
        },
        {
            "type": "coin",
            "row": 17,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 4
        },
        {
            "type": "coin",
            "row": 17,
            "col": 5
        },
        {
            "type": "coin",
            "row": 17,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 7
        },
        {
            "type": "coin",
            "row": 17,
            "col": 8
        },
        {
            "type": "coin",
            "row": 17,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 10
        },
        {
            "type": "coin",
            "row": 17,
            "col": 11,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 12
        },
        {
            "type": "coin",
            "row": 17,
            "col": 13,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 14
        },
        {
            "type": "coin",
            "row": 17,
            "col": 15
        },
        {
            "type": "coin",
            "row": 17,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 17
        },
        {
            "type": "coin",
            "row": 17,
            "col": 18
        },
        {
            "type": "coin",
            "row": 17,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 20
        },
        {
            "type": "coin",
            "row": 17,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 18,
            "col": 1
        },
        {
            "type": "coin",
            "row": 18,
            "col": 3
        },
        {
            "type": "coin",
            "row": 18,
            "col": 6
        },
        {
            "type": "coin",
            "row": 18,
            "col": 11
        },
        {
            "type": "coin",
            "row": 18,
            "col": 16
        },
        {
            "type": "coin",
            "row": 18,
            "col": 19
        },
        {
            "type": "coin",
            "row": 18,
            "col": 21
        },
        {
            "type": "coin",
            "row": 19,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 4,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 6
        },
        {
            "type": "coin",
            "row": 19,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 9
        },
        {
            "type": "coin",
            "row": 19,
            "col": 10
        },
        {
            "type": "coin",
            "row": 19,
            "col": 11,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 12
        },
        {
            "type": "coin",
            "row": 19,
            "col": 13
        },
        {
            "type": "coin",
            "row": 19,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 16
        },
        {
            "type": "coin",
            "row": 19,
            "col": 18,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 20,
            "col": 1
        },
        {
            "type": "coin",
            "row": 20,
            "col": 4
        },
        {
            "type": "coin",
            "row": 20,
            "col": 6
        },
        {
            "type": "coin",
            "row": 20,
            "col": 8
        },
        {
            "type": "coin",
            "row": 20,
            "col": 14
        },
        {
            "type": "coin",
            "row": 20,
            "col": 16
        },
        {
            "type": "coin",
            "row": 20,
            "col": 18
        },
        {
            "type": "coin",
            "row": 20,
            "col": 21
        },
        {
            "type": "coin",
            "row": 21,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 2
        },
        {
            "type": "coin",
            "row": 21,
            "col": 3
        },
        {
            "type": "coin",
            "row": 21,
            "col": 4,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 5
        },
        {
            "type": "coin",
            "row": 21,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 7
        },
        {
            "type": "coin",
            "row": 21,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 9
        },
        {
            "type": "coin",
            "row": 21,
            "col": 10
        },
        {
            "type": "beer",
            "row": 21,
            "col": 11
        },
        {
            "type": "coin",
            "row": 21,
            "col": 12
        },
        {
            "type": "coin",
            "row": 21,
            "col": 13
        },
        {
            "type": "coin",
            "row": 21,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 15
        },
        {
            "type": "coin",
            "row": 21,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 17
        },
        {
            "type": "coin",
            "row": 21,
            "col": 18,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 19
        },
        {
            "type": "coin",
            "row": 21,
            "col": 20
        },
        {
            "type": "coin",
            "row": 21,
            "col": 21,
            "args": [
                2
            ]
        }
    ]
})

AllLevels.set(1, {
    "lvlHeight": 25,
    "lvlWidth": 25,
    "WallMap": [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    GhostBase: { row:12, col:12},
    PacManStartingCoordinates: {row:12, col:12},
    GhostToSpawnList: [
        { row: 1, col: 3, pathfindingStrategy: new AStarPathfindingStrategy(), speedratio: 1, image: "corleonne" },
        { row: 3, col: 23, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.horizontalManhattanPriority), speedratio: 1, image: "doyenne" },
        { row: 23, col: 21, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.verticalManhattanPriority), speedratio: 1, image: "corleonne" },
        { row: 21, col: 1, pathfindingStrategy: new AStarPathfindingStrategy(AStarPathfindingStrategy.formula.euclidean), speedratio: 1, image: "doyenne" },
    ],
    "CollictablesToSpawnList": [
        {
            "type": "coin",
            "row": 1,
            "col": 1,
            "args": [
                1
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 23,
            "args": [
                1
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 1,
            "args": [
                1
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 23,
            "args": [
                1
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 4
        },
        {
            "type": "coin",
            "row": 1,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 8
        },
        {
            "type": "coin",
            "row": 1,
            "col": 9
        },
        {
            "type": "coin",
            "row": 1,
            "col": 10
        },
        {
            "type": "coin",
            "row": 1,
            "col": 11
        },
        {
            "type": "coin",
            "row": 1,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 13
        },
        {
            "type": "coin",
            "row": 1,
            "col": 14
        },
        {
            "type": "coin",
            "row": 1,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 18
        },
        {
            "type": "coin",
            "row": 1,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 1,
            "col": 20
        },
        {
            "type": "coin",
            "row": 1,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 2,
            "col": 3
        },
        {
            "type": "coin",
            "row": 2,
            "col": 5
        },
        {
            "type": "coin",
            "row": 2,
            "col": 7
        },
        {
            "type": "coin",
            "row": 2,
            "col": 12
        },
        {
            "type": "coin",
            "row": 2,
            "col": 15
        },
        {
            "type": "coin",
            "row": 2,
            "col": 17
        },
        {
            "type": "coin",
            "row": 2,
            "col": 19
        },
        {
            "type": "coin",
            "row": 2,
            "col": 21
        },
        {
            "type": "coin",
            "row": 3,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 2
        },
        {
            "type": "beer",
            "row": 3,
            "col": 3
        },
        {
            "type": "coin",
            "row": 3,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 8
        },
        {
            "type": "coin",
            "row": 3,
            "col": 9
        },
        {
            "type": "coin",
            "row": 3,
            "col": 10
        },
        {
            "type": "coin",
            "row": 3,
            "col": 11
        },
        {
            "type": "coin",
            "row": 3,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 16
        },
        {
            "type": "coin",
            "row": 3,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 3,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "beer",
            "row": 3,
            "col": 21
        },
        {
            "type": "coin",
            "row": 3,
            "col": 22
        },
        {
            "type": "coin",
            "row": 3,
            "col": 23,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 4,
            "col": 1
        },
        {
            "type": "coin",
            "row": 4,
            "col": 5
        },
        {
            "type": "coin",
            "row": 4,
            "col": 7
        },
        {
            "type": "coin",
            "row": 4,
            "col": 12
        },
        {
            "type": "coin",
            "row": 4,
            "col": 14
        },
        {
            "type": "coin",
            "row": 4,
            "col": 17
        },
        {
            "type": "coin",
            "row": 4,
            "col": 19
        },
        {
            "type": "coin",
            "row": 4,
            "col": 23
        },
        {
            "type": "coin",
            "row": 5,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 2
        },
        {
            "type": "coin",
            "row": 5,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 4
        },
        {
            "type": "coin",
            "row": 5,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 6
        },
        {
            "type": "coin",
            "row": 5,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 8
        },
        {
            "type": "coin",
            "row": 5,
            "col": 9
        },
        {
            "type": "coin",
            "row": 5,
            "col": 10,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 13
        },
        {
            "type": "coin",
            "row": 5,
            "col": 14
        },
        {
            "type": "coin",
            "row": 5,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 17
        },
        {
            "type": "coin",
            "row": 5,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 20
        },
        {
            "type": "coin",
            "row": 5,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 5,
            "col": 22
        },
        {
            "type": "coin",
            "row": 5,
            "col": 23,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 6,
            "col": 1
        },
        {
            "type": "coin",
            "row": 6,
            "col": 7
        },
        {
            "type": "coin",
            "row": 6,
            "col": 10
        },
        {
            "type": "coin",
            "row": 6,
            "col": 13
        },
        {
            "type": "coin",
            "row": 6,
            "col": 15
        },
        {
            "type": "coin",
            "row": 6,
            "col": 16
        },
        {
            "type": "coin",
            "row": 6,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 6,
            "col": 19
        },
        {
            "type": "coin",
            "row": 7,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 2
        },
        {
            "type": "coin",
            "row": 7,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 4
        },
        {
            "type": "coin",
            "row": 7,
            "col": 5
        },
        {
            "type": "coin",
            "row": 7,
            "col": 6,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 7
        },
        {
            "type": "coin",
            "row": 7,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 10
        },
        {
            "type": "coin",
            "row": 7,
            "col": 11
        },
        {
            "type": "coin",
            "row": 7,
            "col": 12
        },
        {
            "type": "coin",
            "row": 7,
            "col": 13,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 15
        },
        {
            "type": "coin",
            "row": 7,
            "col": 17
        },
        {
            "type": "coin",
            "row": 7,
            "col": 18
        },
        {
            "type": "coin",
            "row": 7,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 20
        },
        {
            "type": "coin",
            "row": 7,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 7,
            "col": 22
        },
        {
            "type": "coin",
            "row": 7,
            "col": 23,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 3
        },
        {
            "type": "coin",
            "row": 8,
            "col": 6
        },
        {
            "type": "coin",
            "row": 8,
            "col": 9
        },
        {
            "type": "coin",
            "row": 8,
            "col": 13
        },
        {
            "type": "coin",
            "row": 8,
            "col": 14
        },
        {
            "type": "coin",
            "row": 8,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 8,
            "col": 19
        },
        {
            "type": "coin",
            "row": 8,
            "col": 21
        },
        {
            "type": "coin",
            "row": 8,
            "col": 23
        },
        {
            "type": "coin",
            "row": 9,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 2
        },
        {
            "type": "coin",
            "row": 9,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 6
        },
        {
            "type": "coin",
            "row": 9,
            "col": 7
        },
        {
            "type": "coin",
            "row": 9,
            "col": 8,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 10,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 16
        },
        {
            "type": "coin",
            "row": 9,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 9,
            "col": 19
        },
        {
            "type": "coin",
            "row": 9,
            "col": 21
        },
        {
            "type": "coin",
            "row": 9,
            "col": 23
        },
        {
            "type": "coin",
            "row": 10,
            "col": 1
        },
        {
            "type": "coin",
            "row": 10,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 4
        },
        {
            "type": "coin",
            "row": 10,
            "col": 5
        },
        {
            "type": "coin",
            "row": 10,
            "col": 8
        },
        {
            "type": "coin",
            "row": 10,
            "col": 10
        },
        {
            "type": "coin",
            "row": 10,
            "col": 11
        },
        {
            "type": "coin",
            "row": 10,
            "col": 12
        },
        {
            "type": "coin",
            "row": 10,
            "col": 13
        },
        {
            "type": "coin",
            "row": 10,
            "col": 14
        },
        {
            "type": "coin",
            "row": 10,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 17
        },
        {
            "type": "coin",
            "row": 10,
            "col": 18
        },
        {
            "type": "coin",
            "row": 10,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 10,
            "col": 21
        },
        {
            "type": "coin",
            "row": 10,
            "col": 23
        },
        {
            "type": "coin",
            "row": 11,
            "col": 1
        },
        {
            "type": "coin",
            "row": 11,
            "col": 5
        },
        {
            "type": "coin",
            "row": 11,
            "col": 6
        },
        {
            "type": "coin",
            "row": 11,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 11,
            "col": 8
        },
        {
            "type": "coin",
            "row": 11,
            "col": 10
        },
        {
            "type": "coin",
            "row": 11,
            "col": 14
        },
        {
            "type": "coin",
            "row": 11,
            "col": 17
        },
        {
            "type": "coin",
            "row": 11,
            "col": 21
        },
        {
            "type": "coin",
            "row": 11,
            "col": 23
        },
        {
            "type": "coin",
            "row": 12,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 2
        },
        {
            "type": "coin",
            "row": 12,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 4
        },
        {
            "type": "coin",
            "row": 12,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 7
        },
        {
            "type": "coin",
            "row": 12,
            "col": 10
        },
        {
            "type": "coin",
            "row": 12,
            "col": 14
        },
        {
            "type": "coin",
            "row": 12,
            "col": 17
        },
        {
            "type": "coin",
            "row": 12,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 20
        },
        {
            "type": "coin",
            "row": 12,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 12,
            "col": 22
        },
        {
            "type": "coin",
            "row": 12,
            "col": 23,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 1
        },
        {
            "type": "coin",
            "row": 13,
            "col": 3
        },
        {
            "type": "coin",
            "row": 13,
            "col": 7
        },
        {
            "type": "coin",
            "row": 13,
            "col": 10
        },
        {
            "type": "coin",
            "row": 13,
            "col": 14
        },
        {
            "type": "coin",
            "row": 13,
            "col": 16
        },
        {
            "type": "coin",
            "row": 13,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 13,
            "col": 18
        },
        {
            "type": "coin",
            "row": 13,
            "col": 19
        },
        {
            "type": "coin",
            "row": 13,
            "col": 23
        },
        {
            "type": "coin",
            "row": 14,
            "col": 1
        },
        {
            "type": "coin",
            "row": 14,
            "col": 3
        },
        {
            "type": "coin",
            "row": 14,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 14,
            "col": 6
        },
        {
            "type": "coin",
            "row": 14,
            "col": 7
        },
        {
            "type": "coin",
            "row": 14,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 14,
            "col": 10
        },
        {
            "type": "coin",
            "row": 14,
            "col": 11
        },
        {
            "type": "coin",
            "row": 14,
            "col": 12
        },
        {
            "type": "coin",
            "row": 14,
            "col": 13
        },
        {
            "type": "coin",
            "row": 14,
            "col": 14
        },
        {
            "type": "coin",
            "row": 14,
            "col": 16
        },
        {
            "type": "coin",
            "row": 14,
            "col": 19
        },
        {
            "type": "coin",
            "row": 14,
            "col": 20
        },
        {
            "type": "coin",
            "row": 14,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 14,
            "col": 23
        },
        {
            "type": "coin",
            "row": 15,
            "col": 1
        },
        {
            "type": "coin",
            "row": 15,
            "col": 3
        },
        {
            "type": "coin",
            "row": 15,
            "col": 5
        },
        {
            "type": "coin",
            "row": 15,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 8
        },
        {
            "type": "coin",
            "row": 15,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 16,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 17
        },
        {
            "type": "coin",
            "row": 15,
            "col": 18
        },
        {
            "type": "coin",
            "row": 15,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 15,
            "col": 22
        },
        {
            "type": "coin",
            "row": 15,
            "col": 23,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 16,
            "col": 1
        },
        {
            "type": "coin",
            "row": 16,
            "col": 3
        },
        {
            "type": "coin",
            "row": 16,
            "col": 5
        },
        {
            "type": "coin",
            "row": 16,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 16,
            "col": 10
        },
        {
            "type": "coin",
            "row": 16,
            "col": 11
        },
        {
            "type": "coin",
            "row": 16,
            "col": 15
        },
        {
            "type": "coin",
            "row": 16,
            "col": 18
        },
        {
            "type": "coin",
            "row": 16,
            "col": 21
        },
        {
            "type": "coin",
            "row": 17,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 2
        },
        {
            "type": "coin",
            "row": 17,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 4
        },
        {
            "type": "coin",
            "row": 17,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 6
        },
        {
            "type": "coin",
            "row": 17,
            "col": 7
        },
        {
            "type": "coin",
            "row": 17,
            "col": 9
        },
        {
            "type": "coin",
            "row": 17,
            "col": 11,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 12
        },
        {
            "type": "coin",
            "row": 17,
            "col": 13
        },
        {
            "type": "coin",
            "row": 17,
            "col": 14
        },
        {
            "type": "coin",
            "row": 17,
            "col": 15,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 17
        },
        {
            "type": "coin",
            "row": 17,
            "col": 18,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 19
        },
        {
            "type": "coin",
            "row": 17,
            "col": 20
        },
        {
            "type": "coin",
            "row": 17,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 17,
            "col": 22
        },
        {
            "type": "coin",
            "row": 17,
            "col": 23,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 18,
            "col": 5
        },
        {
            "type": "coin",
            "row": 18,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 18,
            "col": 8
        },
        {
            "type": "coin",
            "row": 18,
            "col": 9
        },
        {
            "type": "coin",
            "row": 18,
            "col": 11
        },
        {
            "type": "coin",
            "row": 18,
            "col": 14
        },
        {
            "type": "coin",
            "row": 18,
            "col": 17
        },
        {
            "type": "coin",
            "row": 18,
            "col": 23
        },
        {
            "type": "coin",
            "row": 19,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 2
        },
        {
            "type": "coin",
            "row": 19,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 4
        },
        {
            "type": "coin",
            "row": 19,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 7
        },
        {
            "type": "coin",
            "row": 19,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 10
        },
        {
            "type": "coin",
            "row": 19,
            "col": 11
        },
        {
            "type": "coin",
            "row": 19,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 14,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 15
        },
        {
            "type": "coin",
            "row": 19,
            "col": 16
        },
        {
            "type": "coin",
            "row": 19,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 18
        },
        {
            "type": "coin",
            "row": 19,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 20
        },
        {
            "type": "coin",
            "row": 19,
            "col": 21,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 19,
            "col": 22
        },
        {
            "type": "coin",
            "row": 19,
            "col": 23,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 20,
            "col": 1
        },
        {
            "type": "coin",
            "row": 20,
            "col": 5
        },
        {
            "type": "coin",
            "row": 20,
            "col": 7
        },
        {
            "type": "coin",
            "row": 20,
            "col": 10
        },
        {
            "type": "coin",
            "row": 20,
            "col": 12
        },
        {
            "type": "coin",
            "row": 20,
            "col": 17
        },
        {
            "type": "coin",
            "row": 20,
            "col": 19
        },
        {
            "type": "coin",
            "row": 20,
            "col": 23
        },
        {
            "type": "coin",
            "row": 21,
            "col": 1,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 2
        },
        {
            "type": "beer",
            "row": 21,
            "col": 3
        },
        {
            "type": "coin",
            "row": 21,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 8
        },
        {
            "type": "coin",
            "row": 21,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 10,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 13
        },
        {
            "type": "coin",
            "row": 21,
            "col": 14
        },
        {
            "type": "coin",
            "row": 21,
            "col": 15
        },
        {
            "type": "coin",
            "row": 21,
            "col": 16
        },
        {
            "type": "coin",
            "row": 21,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 21,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "beer",
            "row": 21,
            "col": 21
        },
        {
            "type": "coin",
            "row": 21,
            "col": 22
        },
        {
            "type": "coin",
            "row": 21,
            "col": 23,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 22,
            "col": 3
        },
        {
            "type": "coin",
            "row": 22,
            "col": 5
        },
        {
            "type": "coin",
            "row": 22,
            "col": 7
        },
        {
            "type": "coin",
            "row": 22,
            "col": 9
        },
        {
            "type": "coin",
            "row": 22,
            "col": 12
        },
        {
            "type": "coin",
            "row": 22,
            "col": 17
        },
        {
            "type": "coin",
            "row": 22,
            "col": 19
        },
        {
            "type": "coin",
            "row": 22,
            "col": 21
        },
        {
            "type": "coin",
            "row": 23,
            "col": 3,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 4
        },
        {
            "type": "coin",
            "row": 23,
            "col": 5,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 6
        },
        {
            "type": "coin",
            "row": 23,
            "col": 7,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 9,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 10
        },
        {
            "type": "coin",
            "row": 23,
            "col": 11
        },
        {
            "type": "coin",
            "row": 23,
            "col": 12,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 13
        },
        {
            "type": "coin",
            "row": 23,
            "col": 14
        },
        {
            "type": "coin",
            "row": 23,
            "col": 15
        },
        {
            "type": "coin",
            "row": 23,
            "col": 16
        },
        {
            "type": "coin",
            "row": 23,
            "col": 17,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 19,
            "args": [
                2
            ]
        },
        {
            "type": "coin",
            "row": 23,
            "col": 20
        },
        {
            "type": "coin",
            "row": 23,
            "col": 21,
            "args": [
                2
            ]
        }
    ]
})

