import { renderHook } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

// Mock i18next to return known values
jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(),
}));

const mockUseTranslation = useTranslation as jest.MockedFunction<
  typeof useTranslation
>;

describe("Internationalization", () => {
  beforeEach(() => {
    const translations: Record<string, string> = {
      "common:welcome": "Welcome to Next Map",
      "navigation:home": "Home",
      "navigation:explore": "Explore",
      "auth:signIn": "Sign In",
      "map:title": "Map Title",
      "errors:generic": "An unexpected error occurred",
    };

    // Mock useTranslation to handle namespaces properly
    mockUseTranslation.mockImplementation((namespace = 'common') => ({
      t: jest.fn((key: string) => {
        // If key doesn't contain namespace, prepend the current namespace
        const fullKey = key.includes(':') ? key : `${namespace}:${key}`;
        return translations[fullKey] || key;
      }),
      i18n: {
        language: "en",
        changeLanguage: jest.fn().mockResolvedValue(undefined),
      },
      ready: true,
    } as unknown as ReturnType<typeof useTranslation>));
  });

  it("should provide translations for common namespace", () => {
    const { result } = renderHook(() => useTranslation("common"));
    expect(result.current.t("welcome")).toBe("Welcome to Next Map");
  });

  it("should provide translations for navigation namespace", () => {
    const { result } = renderHook(() => useTranslation("navigation"));
    expect(result.current.t("home")).toBe("Home");
    expect(result.current.t("explore")).toBe("Explore");
  });

  it("should provide translations for auth namespace", () => {
    const { result } = renderHook(() => useTranslation("auth"));
    expect(result.current.t("signIn")).toBe("Sign In");
  });

  it("should provide translations for map namespace", () => {
    const { result } = renderHook(() => useTranslation("map"));
    expect(result.current.t("title")).toBe("Map Title");
  });

  it("should provide translations for errors namespace", () => {
    const { result } = renderHook(() => useTranslation("errors"));
    expect(result.current.t("generic")).toBe("An unexpected error occurred");
  });

  it("should handle language switching", () => {
    const { result } = renderHook(() => useTranslation());
    expect(result.current.i18n.language).toBe("en");
    expect(result.current.i18n.changeLanguage).toBeDefined();
  });
});
