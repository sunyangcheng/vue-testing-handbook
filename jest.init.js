import { config } from "@vue/test-utils"
import translations from "./src/translations.js"

const locale = "zh"

config.mocks["$t"] = (msg) => translations[locale][msg]