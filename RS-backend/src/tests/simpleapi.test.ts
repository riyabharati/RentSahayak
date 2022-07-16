import {mainApp} from "../index";
import * as request from "supertest";


describe("GET / - a simple api endpoint", () => {
  it("Hello API Request", async () => {
    const result = await request(mainApp).get("/api/user/");
    expect(result.statusCode).toEqual(200);
  });
});


describe("POST / - a simple api endpoint", () => {
  it("Login Request", async () => {
    const result = await request(mainApp).post("/api/user/login").send({ email: "asmee@gmail.com", password: "rentsahayak" });
    expect(result.statusCode).toEqual(200);
  });
});
describe("POST / - a simple api endpoint", () => {
  it("Login Request", async () => {
    const result = await request(mainApp).post("/api/user/login").send({ email: "asmee@gmail.com", password: "rentsahayak" });
    expect(result.statusCode).toEqual(200);
  });
});
describe("POST / - a simple api endpoint", () => {
  it("Register Request", async () => {
    const result = await request(mainApp).post("/api/user/register").send({ email: "richa@gmail.com", password: "rentsahayak",profile:{fullName:'hrichamaharja'} });
    expect(result.statusCode).toEqual(406);
  });
});

describe("GET / - a simple api endpoint", () => {
  it("Register Request", async () => {
    const result =  await request(mainApp).get("/api/booking");
    expect(result.statusCode).toEqual(401);
  });
})
describe("GET / - a simple api endpoint", () => {
  it("Register Request", async () => {
    const result =  await request(mainApp).get("/api/property/house");
    expect(result.statusCode).toEqual(401);
  });
})
describe("GET / - a simple api endpoint", () => {
  it("Register Request", async () => {
    const result =  await request(mainApp).get("/api/user/profile");
    expect(result.statusCode).toEqual(401);
  });
})
describe("POST / - a simple api endpoint", () => {
  it("create Booking", async () => {
    const result =  await request(mainApp).post("/api/booking/new").send({ negotiatedPrice:3000,message:'hello' });
    expect(result.statusCode).toEqual(401);
  });
})
describe("PUT / - a simple api endpoint", () => {
  it("update Booking Status", async () => {
    const result =  await request(mainApp).put("/api/booking/status/:id").send({ status:"pending"});
    expect(result.statusCode).toEqual(401);
  });
})
describe("POST / - a simple api endpoint", () => {
  it("create Booking", async () => {
    const result =  await request(mainApp).post("/api/booking/new").send({ negotiatedPrice:3000,message:'hello' });
    expect(result.statusCode).toEqual(401);
  });
})

