// 1. Define the MajorCredits interface
export interface MajorCredits {
  credits: number;
  // Brand property for unique identification
  __brand: 'MajorCredits';
}

// 2. Define the MinorCredits interface
export interface MinorCredits {
  credits: number;
  // Brand property for unique identification
  __brand: 'MinorCredits';
}

/**
 * Sums the credits of two MajorCredits subjects
 * and returns a new MajorCredits object.
 * @param subject1 - The first MajorCredits subject
 * @param subject2 - The second MajorCredits subject
 * @returns A new MajorCredits object with the summed credits
 */
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  // Return a new object that also satisfies the MajorCredits interface
  return { credits: sum, __brand: 'MajorCredits' };
}

/**
 * Sums the credits of two MinorCredits subjects
 * and returns a new MinorCredits object.
 * @param subject1 - The first MinorCredits subject
 * @param subject2 - The second MinorCredits subject
 * @returns A new MinorCredits object with the summed credits
 */
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  const sum = subject1.credits + subject2.credits;
  // Return a new object that also satisfies the MinorCredits interface
  return { credits: sum, __brand: 'MinorCredits' };
}