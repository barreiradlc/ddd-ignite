import { expect, test } from "vitest";
import { Slug } from "./slug";

test("Should be able to create a new slug from text", () => {
  const createSlugDTO = "Example Slug title"
  const slug = Slug.createFromText(createSlugDTO)

  expect(slug.value).toEqual("example-slug-title")
})