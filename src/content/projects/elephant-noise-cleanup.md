---
title: Elephant Noise Cleanup
summary: A Python pipeline for isolating annotated elephant calls and exploring background-noise reduction in field recordings.
subtitle: Python | librosa | Streamlit
timeframe: Apr 2026
role: Personal project
status: prototype
technologies: [Python, librosa, NumPy, SciPy, Streamlit, matplotlib, soundfile, pandas]
featuredOrder: 2
sourceUrl: https://github.com/JohnEdwards700/ElephantNoise
keyContributions:
  - Implemented configurable spectral-subtraction processing with frequency weighting and soft time masking.
  - Added pre-call, post-call, and blended background-noise estimation options.
  - Built a Streamlit interface to inspect audio and compare spectrograms.
outcome: The pipeline produces cleaned WAV outputs and comparison plots for review; noise reduction quality depends on recording and parameter choices.
---

## Problem and scope

Field recordings can contain aircraft, vehicles, generators, and other environmental sound that masks elephant calls. This personal project takes an annotated call selection and tries to reduce steady background noise while preserving the call's shape. It is designed for selected segments, not full-recording source separation.

## Pipeline and decisions

For each selection, the pipeline reads the annotation mapping, loads the corresponding WAV file, and crops around the call with a short buffer. It computes a short-time Fourier transform, then estimates a frequency-wise noise profile from audio before the call, after it, or both. These three modes (`pre`, `post`, and `both`) let a reviewer compare different surrounding-noise assumptions.

The subtraction step operates on spectrogram magnitude and reconstructs audio with the original phase. It combines a configurable subtraction strength and spectral floor with a soft time mask around the annotated call. Frequency weighting reduces subtraction in the lowest bands and applies a smaller reduction in the next band, which is intended to avoid removing useful low-frequency call energy too aggressively. The Streamlit app exposes examples and outputs for inspection; the pipeline can also be run for one mapped selection at a time.

## Result, review, and limits

Each run can save a cleaned WAV, original and cleaned spectrograms, a before-and-after comparison plot, and a noise-profile plot. Those artifacts support listening and visual review of the selected segment. The README explicitly cautions that this is not perfect source separation: subtraction can thin or damage a call, create musical-noise artifacts, or perform poorly when the selected pre/post windows contain call sound or the annotations are inaccurate. The repository documents qualitative inspection rather than a quantitative benchmark. It is a local Streamlit prototype; the README describes an optional ngrok tunnel, which is a temporary way to expose a local process rather than a hosted public demo.

The main engineering lesson is that the noise estimate is part of the product behavior: changing the chosen context window can change what gets removed. Keeping intermediate plots alongside audio makes those assumptions easier to inspect.
