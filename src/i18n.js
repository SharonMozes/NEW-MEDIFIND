import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translations
const resources = {
  en: {
    translation: {
      welcome: "Welcome to MediFind",
      selectLanguage: "Select Your Language",
      english: "English",
      hindi: "Hindi",
      home: "Home",
      login: "Login",
      register: "Register",
      uploadPrescription: "Upload Prescription",
      selectFile: "Please select a file first.",
      uploadSuccessful: "Upload successful!",
      uploadFailed: "Upload failed. Please try again.",
      uploadTitle: "Upload Your Prescription",
      uploadBtn: "Upload",
      heroDescription: "Upload your prescription and get your medicines delivered to your door!",
      footerText: "© 2025 MediConnect. All rights reserved.",
      searchPlaceholder: "Search medicines...",
      registerAsCustomer: "As Customer",
      registerAsDelivery: "As Delivery Boy",
      registerAsStore: "As Medical Store",
    },
  },
  hi: {
    translation: {
      welcome: "मेडीफाइंड में आपका स्वागत है",
      selectLanguage: "अपनी भाषा चुनें",
      english: "अंग्रेज़ी",
      hindi: "हिन्दी",
      home: "मुखपृष्ठ",
      login: "लॉग इन करें",
      register: "पंजीकरण करें",
      uploadPrescription: "प्रिस्क्रिप्शन अपलोड करें",
      selectFile: "कृपया पहले एक फ़ाइल चुनें।",
      uploadSuccessful: "अपलोड सफल!",
      uploadFailed: "अपलोड विफल। कृपया फिर से प्रयास करें।",
      uploadTitle: "अपनी पर्ची अपलोड करें",
      uploadBtn: "अपलोड करें",
      heroDescription: "अपनी पर्ची अपलोड करें और अपनी दवाइयाँ अपने दरवाजे तक मंगवाएँ!",
      footerText: "© 2025 MediConnect. सर्वाधिकार सुरक्षित।",
      searchPlaceholder: "दवाइयाँ खोजें...",
      registerAsCustomer: "ग्राहक के रूप में",
      registerAsDelivery: "डिलीवरी बॉय के रूप में",
      registerAsStore: "मेडिकल स्टोर के रूप में",
    },
  },
};

// i18n Configuration
i18n
  .use(LanguageDetector) // Detects browser/localStorage language
  .use(initReactI18next) // Connects with React
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"], // Checks localStorage first
      caches: ["localStorage"],
    },
  });

export default i18n;
