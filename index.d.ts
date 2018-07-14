declare module "normalize-email" {
  /**
   * Normalize emails for uniqueness validation
   *
   * @param email Email to normalize
   */
  function normalizeEmail(email: string): string;
  export default normalizeEmail;
}
