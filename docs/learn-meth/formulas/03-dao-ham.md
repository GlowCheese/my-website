---
title: Đạo hàm
---

<style>
{`
.block-equation {
    border: 2px solid green;
    background-color: white;
    color: black;
    padding: 5px;
    width: 90%;
    margin: auto;
    margin-bottom: 50px;
}
.horz-div { display: flex; }
.horz-div > .two { width: 50%; text-align: center }
.horz-div > .three { width: 33.33%; text-align: center }
`}
</style>

#### Đạo hàm cơ bản
<div class='block-equation horz-div'>
    <div class='three'>
        $$
        (x^n)' = n \cdot x^{n-1}
        $$
    </div>

    <div class='three'>
        $$
        (e^x)' = e^x
        $$
    </div>

    <div class='three'>
        $$
        (\ln x)' = 1/x
        $$
    </div>
</div>

#### Đạo hàm lượng giác
<div class='block-equation horz-div'>
    <div class='two'>
        $$
        \begin{aligned}
        (\sin x)' &= \cos x \\
        (\tan x)' &= 1 / \cos^2 x \\
        (\sin x)^{(m)} &= \sin \left(x + \frac{m\pi}2\right)
        \end{aligned}
        $$
    </div>
    <div class='two'>
        $$
        \begin{aligned}
        (\cos x)' &= -\sin x \\
        (\cot x)' &= -1 / \sin^2 x \\
        (\cos x)^{(m)} &= \cos \left(x + \frac{m\pi}2\right)
        \end{aligned}
        $$
    </div>
</div>

#### Đạo hàm lượng giác ngược
<div class='block-equation'>
    $$
    \begin{aligned}
    \frac{d}{dx}(\arcsin x) &= \frac{1}{\sqrt{1 - x^2}} \\
    \frac{d}{dx}(\arccos x) &= -\frac{1}{\sqrt{1 - x^2}} \\
    \frac{d}{dx}(\arctan x) &= \frac{1}{1 + x^2}
    \end{aligned}
    $$
</div>

#### Đạo hàm hàm mũ và logarit tổng quát
<div class='block-equation horz-div'>
    <div class='two'>
        $$
        \frac{d}{dx}(a^x) = a^x \cdot \ln a
        $$
    </div>
    <div class='two'>
        $$
        \frac{d}{dx}(\log_a x) = \frac{1}{x \cdot \ln a}
        $$
    </div>
</div>

#### Quy tắc đạo hàm
<div class='block-equation'>
    <div class='horz-div'>
        <div class='two'>
            $$
            \frac{d}{dx}[u \pm v] = u' \pm v'
            $$
        </div>
        <div class='two'>
            $$
            \frac{d}{dx}[u \cdot v] = u' \cdot v + u \cdot v'
            $$
        </div>
    </div>
    <div class='horz-div'>
        <div class='two'>
            $$
            \frac{d}{dx}\left[\frac{u}{v}\right] = \frac{u' \cdot v - u \cdot v'}{[v]^2}
            $$
        </div>
        <div class='two'>
            $$
            \frac{d}{dx}[f(u(x))] = f'(u) \cdot u'(x)
            $$
        </div>
    </div>
</div>

#### Đạo hàm Hyperbolic
<div class='block-equation horz-div'>
    <div class='three'>
        $$
        \frac{d}{dx}(\sinh x) = \cosh x
        $$
    </div>

    <div class='three'>
        $$
        \frac{d}{dx}(\cosh x) = \sinh x
        $$
    </div>

    <div class='three'>
        $$
        \frac{d}{dx}(\tanh x) = 1 / \cosh^2 x
        $$
    </div>
</div>
