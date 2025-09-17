---
title: "Project 3"
slug: "proj-3"
year: 2025
---

Similar to closed systems, tensor networks and TEBD can be used to simulate the time evolution of open systems. This works through vectorizing the density matrix (a matrix product operator) so that it looks like a state (a matrix product state). In this case the time-evolution is given by

which could also have been obtained through naive integration of the density matrix

$$ x = e^{\mathcal{L} t} x(0) $$

Here I provide some code I have written in a Jupyter notebook to exactly simulate Lindblad dynamics for small open systems, and in another notebook provide code to simulate Lindblad dynamics using tensor networks and TEBD. While the number of sites is small in these example codes this is to benchmark the tensor network methods against the exact methods, and the tensor network methods can handle spin chains of length L = 64 with bond dimension χ = 20 in one hour without further optimization.