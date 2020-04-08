from selenium import webdriver
import time
import random


URL = 'http://ec2-3-85-51-95.compute-1.amazonaws.com/'
TRIES = 500


if __name__ == '__main__':
    browser = webdriver.Firefox()

    for x in range(0, TRIES):
        sleep = random.randint(0, 5)
        print("Try %d then sleeping %d seconds" % (x, sleep))
        browser.get(URL)
        time.sleep(sleep)

    browser.quit()
    print("Done!")
