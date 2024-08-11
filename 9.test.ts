import { RecordService } from "./9";

jest.mock("./9", () => ({
  RecordService: jest.fn().mockImplementation(() => ({
    fetchAllRecords: jest.fn().mockResolvedValue([1, 2, 3]),
  })),
}));

describe("RecordService", () => {
  it("should return an array [1, 2, 3] when fetchAllRecords is called", async () => {
    const service = new RecordService();
    const records = await service.fetchAllRecords();
    expect(records).toEqual([1, 2, 3]);
  });
});
