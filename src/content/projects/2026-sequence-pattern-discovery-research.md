---
title: Sequence Pattern Discovery (WGS Resistance Research)
summary: A research project exploring bacterial genome sequence representations and clustering in relation to carbapenem resistance.
subtitle: Python | ESM-2 | Transformer clustering
timeframe: Mar 2026
role: Personal research project
status: research
technologies: [Python, "Jupyter Notebook", Shell, PyTorch, ESM-2, scikit-learn, NumPy]
featuredOrder: 3
sourceUrl: https://github.com/JohnEdwards700/2026-Sequence-Pattern-Discovery-Research
artifactUrl: https://github.com/user-attachments/files/28583155/Sequence_Research_2026.pdf
artifactLabel: Sequence research report (PDF)
keyContributions:
  - Framed research questions around carbapenemase genes, genomic context, and other candidate resistance mechanisms.
  - Structured an exploratory workflow connecting FASTA/WGS sequences, ESM-2 embeddings, modeling, and clustering.
  - Organized supporting utilities for preprocessing, training, and cluster evaluation.
outcome: The repository is an exploratory scaffold for investigating sequence patterns; the available notes do not establish validated predictive performance or biological findings.
---

## Research question

The project studies whole-genome sequencing data from bacterial isolates to explore patterns associated with carbapenem resistance and generate hypotheses for further investigation. The README frames questions about known carbapenemase genes (including blaKPC, blaNDM, blaVIM, and blaOXA), whether resistance genes are chromosomal or plasmid-borne, and possible contributions from porins, efflux pumps, PBPs, and less common beta-lactamase variants. Resistant isolate data are intended to be compared with background genomes.

## Representation and analysis work

The README describes a planned path from FASTA/WGS sequences through ESM-2 embeddings, transformer-based modeling, and clustering with visualization. The repository includes an ESM-2 helper that batches protein sequences, tokenizes them, and returns per-residue embeddings with attention masks. It also contains a separate exploratory analysis path that encodes reads as normalized k-mer counts, tracks GC content and isolate labels, trains a small autoencoder (or uses PCA), visualizes representations with t-SNE, and searches MiniBatch K-means cluster counts using a validation silhouette score. Motif checks for several named resistance genes are heuristics over selected k-mers.

John's contribution is the framing and organization of this exploratory research workflow and its supporting code. The repository has multiple representation experiments; the README's ESM-2-to-transformer description should not be read as proof that every stage is integrated into one validated end-to-end model.

## Artifact and interpretation limits

The repository links a research report PDF and contains analysis scripts and notebooks. These materials document the investigation, but no verified predictive benchmark or confirmed biological discovery is claimed here. The clustering and motif summaries are exploratory signals; they do not establish gene presence, genomic location, causation, or clinical resistance on their own. The work's main lesson is methodological: sequence representation and cluster structure can help organize hypotheses, but biological conclusions require appropriate sequence annotation and independent validation.
