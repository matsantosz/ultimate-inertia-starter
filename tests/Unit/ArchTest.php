<?php

declare(strict_types=1);

arch('strict types', function () {
    expect('App')->toUseStrictTypes();
});

arch('avoid dumps', function () {
    expect(['dd', 'dump'])->not->toBeUsed();
});
