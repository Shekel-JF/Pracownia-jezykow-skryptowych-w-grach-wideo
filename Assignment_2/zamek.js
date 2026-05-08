player.onChat("zamek", function () {
    blocks.fill(WATER, pos(-15, -1, -15), pos(15, -3, 15))
    blocks.fill(GRASS, pos(-10, -1, -10), pos(10, -1, 10))

    blocks.fill(STONE_BRICKS, pos(-5, 0, -5), pos(5, 0, 5))

    blocks.fill(STONE_BRICKS, pos(-5, 1, -5), pos(5, 5, 5))
    blocks.fill(AIR, pos(-4, 1, -4), pos(4, 4, 4))

    blocks.fill(PLANKS_OAK, pos(-4, 5, -4), pos(4, 5, 4))
    blocks.fill(STONE_BRICKS, pos(-5, 6, -5), pos(5, 9, 5))
    blocks.fill(AIR, pos(-4, 6, -4), pos(4, 9, 4))

    let wiezeX = [-8, 5, -8, 5]
    let wiezeZ = [-8, -8, 5, 5]

    for (let i = 0; i <= 3; i++) {
        let x = wiezeX[i]
        let z = wiezeZ[i]

        blocks.fill(COBBLESTONE, pos(x, 0, z), pos(x + 3, 11, z + 3))
        blocks.fill(AIR, pos(x + 1, 1, z + 1), pos(x + 2, 10, z + 2))

        blocks.place(COBBLESTONE, pos(x, 12, z))
        blocks.place(COBBLESTONE, pos(x + 3, 12, z))
        blocks.place(COBBLESTONE, pos(x, 12, z + 3))
        blocks.place(COBBLESTONE, pos(x + 3, 12, z + 3))
    }

    blocks.fill(AIR, pos(-1, 1, -5), pos(1, 3, -5))
    blocks.fill(IRON_BARS, pos(-1, 3, -5), pos(1, 3, -5))

    blocks.fill(PLANKS_OAK, pos(-1, 0, -6), pos(1, 0, -15))

    blocks.place(GLASS, pos(-5, 2, 0))
    blocks.place(GLASS, pos(5, 2, 0))
    blocks.place(GLASS, pos(-5, 7, 0))
    blocks.place(GLASS, pos(5, 7, 0))

    blocks.place(blocks.blockWithData(COBBLESTONE_STAIRS, 2), pos(6, 0, -1))
    blocks.place(blocks.blockWithData(COBBLESTONE_STAIRS, 2), pos(6, 1, 0))
    blocks.place(blocks.blockWithData(COBBLESTONE_STAIRS, 2), pos(6, 2, 1))
    blocks.place(blocks.blockWithData(COBBLESTONE_STAIRS, 2), pos(6, 3, 2))
    blocks.place(blocks.blockWithData(COBBLESTONE_STAIRS, 2), pos(6, 4, 3))
    blocks.place(blocks.blockWithData(COBBLESTONE_STAIRS, 2), pos(6, 5, 4))
    blocks.fill(AIR, pos(5, 6, 4), pos(5, 7, 4))
})
