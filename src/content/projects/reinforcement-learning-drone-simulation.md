---
title: Reinforcement Learning Drone Simulation
summary: An experimental simulation project exploring reinforcement-learning agents for drone navigation.
subtitle: Python | PyTorch | Stable-Baselines3
timeframe: Nov 2024
role: Research-oriented project contributor
status: research
technologies: [Python, PyTorch, Stable-Baselines3, "RL training", Experimentation]
sourceUrl: https://github.com/JohnEdwards700/drone_sim_with_ML
artifactUrl: https://github.com/user-attachments/assets/79a0f737-520e-48b7-9f17-b48c5e68f6d3
artifactLabel: Drone simulation demonstration video
keyContributions:
  - Configured observation spaces and reward functions for navigation experiments.
  - Evaluated agent behavior across navigation tasks and training runs.
  - Explored policy optimization settings and their effect on training behavior.
outcome: The experiments provided practical experience with how observation and reward design can affect agent behavior; no benchmark results are recorded in the available notes.
---

## Goal and project boundary

The project explores whether a reinforcement-learning policy can control a quadrotor simulation toward a goal while maintaining reasonably smooth flight. The repository builds on an existing drone dynamics, visualization, and environment library; John describes his work as additions to the visualization, adaptations to the Gym environment, and PPO training/model files. This is a contribution to an existing codebase, not a claim of sole authorship of the simulator.

## Environment and training approach

The adapted environment exposes four continuous motor commands. It scales actions to motor velocities, advances the simulated drone, and returns observations that include position, velocity, orientation, goal position and direction, and obstacle coordinates. The environment chooses from fixed initial and goal positions. John used Stable-Baselines3's PPO implementation for training and saved model checkpoints and run artifacts in the repository.

Reward shaping combines goal-distance progress and movement with velocity and attitude terms. The environment also applies penalties around position and tilt limits and ends an episode on a nearby-goal condition or a step/bounds limit. This makes the reward and termination behavior central design choices: the agent is being taught how to trade progress against a more stable attitude, rather than receiving a single success signal.

## Result and limits

The repository README links a project report and a simulation video, and the repository contains PPO model files. These make the experiment inspectable, but the README does not provide a benchmark or establish reliable goal-reaching performance. There is also an important implementation limit: obstacle positions appear in the observation, but the environment's obstacle-collision penalty is commented out. The project therefore documents an obstacle-navigation goal without demonstrating that collision avoidance is enforced by the current reward. The work illustrates how simulation state, reward shaping, and termination rules must be aligned before a trained policy can support a strong performance claim.
