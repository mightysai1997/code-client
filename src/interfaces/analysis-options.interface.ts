import { SupportedFiles } from '..';
import { ConnectionOptions } from '../http';

export interface AnalysisOptions {
  readonly shard?: string;
  readonly severity?: number;
  readonly limitToFiles?: string[];
  readonly prioritized?: boolean;
  readonly legacy?: boolean;
}

// eslint-disable-next-line import/prefer-default-export, no-shadow
export enum AnalysisSeverity {
  info = 1,
  warning = 2,
  critical = 3,
}

export interface AnalysisContext {
  orgPublicId: string;
  orgDisplayName: string;
  projectPublicId: string;
  projectName: string;
  initiator: 'IDE' | 'CLI';
  flow: string;
}

export interface AnalysisMetadata {
  metadata?: Partial<AnalysisContext>;
}

export interface FileAnalysisOptions {
  connection: ConnectionOptions;
  analysisOptions: AnalysisOptions;
  fileOptions: AnalyzeFoldersOptions;
  analysisContext?: Partial<AnalysisContext>;
}

export interface AnalyzeFoldersOptions {
  paths: string[];
  symlinksEnabled?: boolean;
  defaultFileIgnores?: string[];
}

export interface CollectBundleFilesOptions extends AnalyzeFoldersOptions {
  supportedFiles: SupportedFiles;
  baseDir: string;
  fileIgnores: string[];
}
