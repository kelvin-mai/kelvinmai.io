export const copyToClipboardWithMeta = async (value: string) => {
  navigator.clipboard.writeText(value);
};
