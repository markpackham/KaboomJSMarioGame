player.collides("pipe", () => {
  keyPress("down", () => {
    go("game", {
      level: level + 1,
      score: scoreLabel.value,
    });
  });
});

keyDown("left", () => {
  player.move(-MOVE_SPEED, 0);
});

keyDown("right", () => {
  player.move(MOVE_SPEED, 0);
});

player.action(() => {
  if (player.grounded()) {
    isJumping = false;
  }
});

keyPress("space", () => {
  if (player.grounded()) {
    isJumping = true;
    player.jump(CURRENT_JUMP_FORCE);
  }
});

export { keyDown, keyPress };
