import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FraxtaL3aderboard2048Module = buildModule("FraxtaL3aderboard2048Module", (m) => {
    const fraxtaL3aderboard2048 = m.contract("FraxtaL3aderboard2048");
});

export default FraxtaL3aderboard2048Module;