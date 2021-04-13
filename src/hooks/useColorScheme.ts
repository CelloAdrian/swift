import { ColorSchemeName, useColorScheme as _useColorScheme } from "react-native"

// In practice, useColorScheme value is always light or dark, 
// but the built in type suggests it can be null.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
    return _useColorScheme() as NonNullable<ColorSchemeName>;
}