import { getData } from "../utils/http-request.js"
jest.mock("../utils/http-request.js")

test('get data from reddit server', async () => {
    getData.mockResolvedValue({
        data: { children: [] }
    });

    const actualSports = await getData('sports');
    const actualTennis = await getData('tennis');
    const actualGolf = await getData('golf');
    const actualEquestrian = await getData('Equestrian');

    expect(actualSports.data.children).toEqual(expect.any(Array));
    expect(actualTennis.data.children).toEqual(expect.any(Array));
    expect(actualGolf.data.children).toEqual(expect.any(Array));
    expect(actualEquestrian.data.children).toEqual(expect.any(Array));
});






