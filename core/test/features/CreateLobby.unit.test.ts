import { MockLobbyService } from "@alexslater-io/gaming-service-common";
import { describe, expect, test } from "@jest/globals";
import { beforeEach } from "node:test";
import { ListLobbies } from "../../src/features/ListLobbies";

describe("List Lobbies", () => {
	const lobbyService = new MockLobbyService();
	beforeEach(() => {
		lobbyService.reset();
	});
	test("should trigger list lobbies", async () => {
		const sut = new ListLobbies(lobbyService.mock);
		const result = await sut.run({});
		expect(result.length).toBeDefined();
	});
});
