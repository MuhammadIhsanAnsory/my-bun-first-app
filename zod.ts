import { z } from "zod";

const loginValidation = z.object({
  username: z.string().min(1).max(50).email(),
  password: z.string().min(6).max(20),
});

const request = {
  username: "ihsan@gmail.com",
  password: "123123123",
};

loginValidation.parse(request);
